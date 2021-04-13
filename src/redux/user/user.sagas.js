import { put, takeLatest, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils';
import { googleSignInFailure, googleSignInSucces} from './user.actions';
export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnappshot = yield userRef.get();
        yield put(googleSignInSucces({ id: userSnappshot.id, ...userSnappshot.data() }));
    } catch (error) {
        yield put(googleSignInFailure(error.message));
    }
};

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

export function* userSagas(){
  yield all([call(onGoogleSignInStart)]) 
};
import React from 'react';
import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectShopSections } from '../../redux/shop/shop.selectors'


// import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = ({collections}) => (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );


const mapStateToProps = createStructuredSelector({
  collections: selectShopSections
});

export default connect(mapStateToProps)(ShopPage);

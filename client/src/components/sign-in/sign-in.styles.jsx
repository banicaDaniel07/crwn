import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

`;

export const SignInTitle = styled.h2`
  margin: 10px 0;

  @media (max-width: 920px) {
    text-align: center;
    align-items: center;
  }
`;

export const SignInSpan = styled.span`
  @media (max-width: 920px) {
    text-align: center;
  }
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
    padding: 20px 80px;
    height: 170px;
  }
`;

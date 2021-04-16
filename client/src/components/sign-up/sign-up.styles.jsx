import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;

  @media (max-width: 920px) {
    text-align: center;
    margin-top: 20px;
  }
`;


export const SignInSpan = styled.span`
  @media (max-width: 920px) {
    text-align: center;
  }
`;

export const StyleForButton = styled.div`
@media (max-width: 920px) {
  display: flex;
  justify-content: center;
}
`
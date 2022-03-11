import styled from 'styled-components'

export const AppBody = styled.div`
  display: flex ;
  height: 100vh ;
`;

export const AppLoading = styled.div`
  display: flex;
  justify-content: center ;
  height: 100vw ;
  width: 100vw ;
`;

export const AppLoadingContent = styled.div`
  display: flex;
  text-align: center;
  padding: 100px;
  flex-direction: column ;
  justify-content: center ;
  align-items: center ;

  > img {
    height: 100px ;
  }
`;
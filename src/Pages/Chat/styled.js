import styled from 'styled-components'

export const ChatContainer = styled.div`
  margin-top: 60px ;
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
`;

export const Header = styled.div`
  display: flex ;
  justify-content: space-between;
  align-items: center ;
  padding: 20px;
  border-bottom: 1px solid lightgray ;
`;

export const HeaderLeft = styled.div`
  display: flex ;
  align-items: center ;

  > h4 {
    text-transform: lowercase ;
  }

  > .MuiSvgIcon-root {
    margin-left: 20px ;
    font-size: 18px;
  }
`;

export const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center ;
    font-size: 14px;

    > .MuiSvgIcon-root {
      margin-right: 10px ;
      font-size: 18px;
    }
  }
`;

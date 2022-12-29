import styled from 'styled-components';

export const PreloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const PreloaderImg = styled.img`
  width: 100px;
  height: 100px;
  animation-name: blinker;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-duration: 1s;
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
  -webkit-animation-duration: 0.5s;
  @keyframes blinker {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes blinker {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

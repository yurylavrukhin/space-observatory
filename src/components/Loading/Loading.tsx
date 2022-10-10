import styled from 'styled-components';

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  & div {
    position: absolute;
    top: 18.5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.4s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.4s infinite;
  }
  & div:nth-child(3) {
    left: 16px;
    animation: lds-ellipsis2 0.4s infinite;
  }
  & div:nth-child(4) {
    left: 24px;
    animation: lds-ellipsis3 0.4s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(8px, 0);
    }
  }
`;

export const Loading = () => {
  return (
    <Loader>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Loader>
  );
};

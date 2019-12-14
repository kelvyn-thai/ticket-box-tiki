import React from "react";
import styled from "styled-components";

interface IProps {}

const Styled = styled.div`
  &.loading {
    position: relative;
    width: 100vw;
    height: 100vh;
    .logo {
      width: 128px;
      height: 128px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Loading = (props: IProps) => {
  return (
    <Styled className="loading">
      <div className="logo">
        <img src={`images/logo.png`} alt="" />
      </div>
    </Styled>
  );
};

export default Loading;

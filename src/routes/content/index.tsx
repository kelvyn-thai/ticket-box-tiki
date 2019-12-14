import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
interface IProps {}

const Styled = styled.div`
  &.content {
    .top {
      display: flex;
      align-items: center;
    }
    .top .name {
      text-align: center;
      font-family: MavenPro-Bold;
      font-size: 20px;
      line-height: 24px;
      margin: auto;
    }
    .top .back-icon {
      width: 16px;
    }
    .hook {
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }
    .hook .age-limit,
    .sub {
      font-size: 14px;
      line-height: 18px;
    }
    .hook .sub {
      padding-left: 10px;
    }
    .hook .age-limit {
      position: relative;
      padding-right: 10px;
      ::after {
        position: absolute;
        height: 70%;
        width: 2px;
        background: #fff;
        right: 0;
        content: "";
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

const Content = (props: IProps) => {
  const { name, age_limit, sub } = useSelector(
    (state: any) => state.content
  ).data;
  return (
    <Styled className="content">
      <div className="top">
        <button className="back-icon">
          <img src={`images/icons/back.svg`} alt="" />
        </button>
        <p className="name">{name}</p>
      </div>
      <div className="hook">
        <p className="age-limit">{age_limit}</p>
        <p className="sub">{sub} </p>
      </div>
    </Styled>
  );
};

export default Content;

import React from "react";
import styled from "styled-components";
import withTranslate from "src/shared/components/hoc/withTranslate";

interface IProps {
  translate: any;
}

const Styled = styled.div`
  &.bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    .hook {
      position: relative;

      margin-bottom: 20px;
      padding-left: 40px;
      ::before {
        left: 0;
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
      }
      &.seat-unavailable {
        ::before {
          background: #1e1e1e;
        }
      }
      &.seat-selected {
        ::before {
          background: #fff;
        }
      }
      &.standard {
        ::before {
          border: solid 1px #fff;
        }
      }
      &.vip {
        ::before {
          border: solid 1px #2f904f;
        }
      }
      &.deluxe {
        ::before {
          border: solid 1px #7ea5e2;
        }
      }
    }
    .hook .desc {
      font-size: 16px;
      line-height: 20px;
    }
    .seats-types {
      max-width: 50%;
      flex: 1 0 auto;
    }
  }
`;

const Bottom = (props: IProps) => {
  const { status, types } = props.translate.bookTicket.bottom;
  return (
    <Styled className="bottom">
      <div className="seats-status">
        <div className="hook seat-unavailable">
          <p className="desc">{status.unavailable}</p>
        </div>
        <div className="hook seat-selected">
          <p className="desc">{status.selected}</p>
        </div>
      </div>
      <div className="seats-types">
        {types.map((item: any, index: any) => (
          <div className={`hook ${item.type.toLowerCase()}`} key={index}>
            <p className="desc">{`${item.type} - ${item.price}`}</p>
          </div>
        ))}
      </div>
    </Styled>
  );
};

export default withTranslate(Bottom);

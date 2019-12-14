import React from "react";
import styled from "styled-components";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { breakpoints } from "src/shared/utils/styled";
import { useDispatch } from "react-redux";
import { actionTogglePopup } from "src/shared/popup/popup.actions";

interface IProps {
  translate: any;
}

const Styled = styled.div`
  &.popup {
    width: 60%;
    height: 20%;
    max-height: 150px;
    background: #fff;
    border-radius: 10px;
    padding: 2%;
    .close-icon {
      text-align: right;
    }
    .close-icon button {
      width: 24px;
    }
    .break {
      margin: 10px 0;
      height: 2px;
      background: #aaa;
    }
    .btn-ok {
      text-align: right;
      .btn {
        width: 40px;
      }
    }
    .des {
      color: #000;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

const Popup = (props: IProps) => {
  const dispatch = useDispatch();
  const { maxTicketBuy, btnOK } = props.translate.bookTicket.popup;
  return (
    <Styled className="popup abs-center">
      <div className="close-icon">
        <button
          className=""
          onClick={() =>
            dispatch(actionTogglePopup({ toggle: false, data: { comp: "" } }))
          }
        >
          <img src={`images/icons/close.svg`} alt="" />
        </button>
      </div>
      <p
        className="des"
        dangerouslySetInnerHTML={{
          __html: maxTicketBuy
        }}
      ></p>
      <div className="break"></div>
      <div className="btn-ok">
        <button className="btn">{btnOK}</button>
      </div>
    </Styled>
  );
};

export default withTranslate(Popup);

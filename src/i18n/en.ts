import { MAX_TICKET_BUY } from "src/routes/tickets/tickets.constant";

export default {
  bookTicket: {
    payment: {
      btnCombo: "Chọn combo",
      btnPayment: "Thanh toán"
    },
    popup: {
      maxTicketBuy: `Bạn chỉ có thể  mua tối đa <hilight>${MAX_TICKET_BUY}</hilight> vé!`,
      btnOK: "OK"
    },
    tickets: {},
    bottom: {
      status: {
        unavailable: "Đã đặt",
        selected: "Đang chọn",
        normal: "Có thể chọn",
        area: "Không thể chọn"
      },
      types: [
        { type: "Standard", price: "60.000đ", price_float: 60000 },
        { type: "VIP", price: "90.000đ", price_float: 90000 },
        { type: "Deluxe", price: "110.000đ", price_float: 110000 }
      ]
    }
  }
};

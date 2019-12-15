export const getPopupFactories = () => ({
  maxTicketBuy: () => import("src/routes/bookTicket/bookTicket.popup"),
  payment: () => import("src/routes/payment/payment.popup")
});

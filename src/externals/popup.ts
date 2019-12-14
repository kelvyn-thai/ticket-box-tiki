export const getPopupFactories = () => ({
  maxTicketBuy: () => import("src/routes/bookTicket/bookTicket.popup")
});

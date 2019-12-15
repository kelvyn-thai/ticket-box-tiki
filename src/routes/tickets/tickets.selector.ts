import { createSelector } from "reselect";
import { formatCurrency } from "src/shared/utils";

export const ticketsSelector = createSelector(
  (state: any) => state.tickets,
  tickets => tickets
);

export const totalTicketsPriceSelector = createSelector(
  (state: any) => ticketsSelector(state),
  tickets => {
    console.log("curr", formatCurrency(tickets.total));
    return formatCurrency(tickets.total);
  }
);

// export const detailsTicketsSelector = createSelector(
//   (state: any) => state.tickets,
//   tickets => {
//     let details: any = {};
//     if (!tickets.isFetched) {
//       return details;
//     }
//     tickets.data.forEach((row: any) => {
//       row.forEach((ticket: any) => {
//         const { type, price } = ticket.details;
//         if (!details[type]) {
//           details[type] = price;
//         }
//       });
//     });
//     return details;
//   }
// );

// export const rowsTicketsSelector = createSelector(
//     (state: any) => state.tickets,
//     tickets => []
// )

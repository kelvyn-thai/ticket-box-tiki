import { createSelector } from "reselect";

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
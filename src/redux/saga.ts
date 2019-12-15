import { all } from "redux-saga/effects";
import contentSagas from "src/routes/content/content.actions";
import ticketsSagas from "src/routes/tickets/tickets.actions";
import paymentSagas from "src/routes/payment/payment.actions";

function* rootSaga() {
  yield all([
    ...contentSagas.map((saga: any) => saga()),
    ...ticketsSagas.map((saga: any) => saga()),
    ...paymentSagas.map((saga: any) => saga())
  ]);
}

export default rootSaga;

import { all } from "redux-saga/effects";
import contentSagas from "src/routes/content/content.actions";
import ticketsSagas from "src/routes/tickets/tickets.actions";

function* rootSaga() {
  yield all([
    ...contentSagas.map((saga: any) => saga()),
    ...ticketsSagas.map((saga: any) => saga())
  ]);
}

export default rootSaga;

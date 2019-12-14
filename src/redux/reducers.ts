import { combineReducers } from "redux";
import popup from "src/shared/popup/popup.reducer";
import configs from "src/configs/configs.reducer";
import notifications from "src/shared/nofitications/notifications.reducer";
import content from "src/routes/content/content.reducer";
import tickets from "src/routes/tickets/tickets.reducer";

export default combineReducers({
  popup,
  configs,
  notifications,
  content,
  tickets
});

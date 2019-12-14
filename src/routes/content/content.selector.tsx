import { createSelector } from "reselect";

export const contentSelector = createSelector(
  (state: any) => state.content,
  content => content
);

import { atom, atomFamily } from "recoil";
import { getUserListState } from "./selectors";

export const userState = atomFamily({
  key: "userState",
  default: id => getUserListState(id)
});

export const results = atom({
  key: "results",
  default: []
});

export const userId = atom({
  key: "userId",
  default: 0
});

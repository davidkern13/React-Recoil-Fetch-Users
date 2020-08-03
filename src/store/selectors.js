import { selector, selectorFamily } from "recoil";
import axios from "axios";

export const userListState = selector({
  key: "userStateList",
  get: async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    const users = await response.data;
    const userEntries = users.map((user, i) => [i, user]);
    return new Map(userEntries);
  }
});

export const getUserListState = selectorFamily({
  key: "getUserListState",

  get: id => ({ get }) => {
    return get(userListState).get(id);
  }
});

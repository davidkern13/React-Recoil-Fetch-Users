import React, { useEffect } from "react";
import "./styles.css";

import { useRecoilValue, useRecoilValueLoadable, useRecoilState } from "recoil";

import { userState, results, userId } from "./store/atoms";

import { userListState } from "./store/selectors";

export default function App() {
  const user_list = useRecoilValueLoadable(userListState);

  const [id, setId] = useRecoilState(userId);

  const [data, setDate] = useRecoilState(results);
  const user_in_position = useRecoilValue(userState(id));

  useEffect(() => {
    setDate(user_list);
    console.log("data: ", data);
  }, [data, user_list, setDate]);

  useEffect(() => {
    console.log("user_in_position: ", user_in_position);
  }, [user_in_position]);

  return (
    <div className="App">
      <h1>Check the console log for MAGIK!</h1>
      <button onClick={() => setId(id + 1)}>Get user in position {id}</button>
    </div>
  );
}

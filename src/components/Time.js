import React from "react";
import { useSelector } from "react-redux";
import { selectTime } from "../redux/reducers/cockpitSlice";

function Time(props) {
  const time = useSelector(selectTime);
  return <div>{time}</div>;
}

export default Time;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSecond,
  selectTime,
  timerStart,
} from "../redux/reducers/cockpitSlice";
import Time from "./Time";

function Cockpit() {
  const time = useSelector(selectTime);
  const dispatch = useDispatch();

  return (
    <h1>
      time yo: <Time />
    </h1>
  );
}

export default Cockpit;

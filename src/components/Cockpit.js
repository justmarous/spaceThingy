import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSecond, selectTime } from "../redux/reducers/cockpitSlice";

function Cockpit() {
  const time = useSelector(selectTime);
  const dispatch = useDispatch();
  const [time2, setTime] = useState(0);

  // setInterval(() => {
  //   dispatch(addSecond());
  // }, [10000]);

  setInterval(() => {
    setTime(time2 + 1);
  }, [1000]);

  console.log(time2);
  return <h1>time yo: adssd</h1>;
}

export default Cockpit;

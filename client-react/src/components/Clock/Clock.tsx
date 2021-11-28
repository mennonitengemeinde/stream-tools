import { useEffect, useState } from "react";

import "./Clock.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const getTimeString = () => {
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `${date.getHours()}:${date.getMinutes()} ${ampm}`;
  };

  return (
    <div id="clock">{getTimeString()}</div>
  );
};

export default Clock;

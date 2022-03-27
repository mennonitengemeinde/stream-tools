import { useEffect, useState } from "react";

import roundLogoImg from "../assets/images/round_logo-512x512.png";

function ClockPage() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [amPm, setAmPm] = useState("am");

  useEffect(() => {
    updateTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function formatHoursTo12HourFormat(hours) {
    if (hours > 12) {
      return hours - 12;
    } else if (hours === 0) {
      return 12;
    } else {
      return hours;
    }
  }

  function formatMintues(min) {
    if (min < 10) {
      return "0" + min;
    } else {
      return min;
    }
  }

  function formatAmPm(hours) {
    if (hours > 12) {
      return "PM";
    } else {
      return "AM";
    }
  }

  function updateTime() {
    const date = new Date();
    setHour(formatHoursTo12HourFormat(date.getHours()));
    setMinutes(date.getMinutes());
    setAmPm(formatAmPm(date.getHours()));
  }

  setInterval(() => {
    updateTime();
  }, 1000);

  return (
    <div className="h-screen bg-background-box-img bg-cover bg-no-repeat pt-5 grid grid-rows-6">
      <div className="row-span-1 h-full flex justify-center">
        <img className="h-full w-auto" src={roundLogoImg} alt="Logo" />
      </div>
      <div className="row-span-4 py-10 flex justify-center">
        <div className="flex justify-center items-center h-full w-9/12 bg-white bg-opacity-60 rounded-3xl shadow-2xl text-10xl">
          <div className="bg-primary text-white px-10 rounded-3xl shadow-2xl mr-5">
            {hour}
          </div>
          <div className="text-primary">:</div>
          <div className="bg-primary text-white px-10 rounded-3xl shadow-2xl mx-5">
            {formatMintues(minutes)}
          </div>
          <div className="bg-primary text-white px-10 rounded-3xl shadow-2xl ml-5">
            {amPm}
          </div>
        </div>
      </div>
      <div className="row-span-1"></div>
    </div>
  );
}

export default ClockPage;

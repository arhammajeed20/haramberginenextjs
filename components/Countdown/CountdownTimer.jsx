"use client";

import { useState, useEffect } from "react";
import moment from "moment-timezone";

export default function CountdownTimer() {
  const targetDate = moment.tz("2026-03-25T05:00:00", "Asia/Dubai");
  const [timeRemaining, setTimeRemaining] = useState(() => {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  });

  useEffect(() => {
    function getTimeRemaining() {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));
      return {
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      };
    }

    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  return (
    <div className="flex items-center justify-between text-center">
      <CountdownBox value={timeRemaining?.days} label="Days" />
      <CountdownBox
        value={
          timeRemaining?.hours < 10
            ? `0${timeRemaining?.hours}`
            : timeRemaining?.hours
        }
        label="Hours"
      />
      <CountdownBox
        value={
          timeRemaining?.minutes < 10
            ? `0${timeRemaining?.minutes}`
            : timeRemaining?.minutes
        }
        label="Minutes"
      />
      <CountdownBox
        value={
          timeRemaining?.seconds < 10
            ? `0${timeRemaining?.seconds}`
            : timeRemaining?.seconds
        }
        label="Seconds"
      />
    </div>
  );
}

function CountdownBox({ value, label }) {
  return (
    <div className="flex items-center justify-center   bg-purple-900/30 rounded-md mx-auto px-6">
      <div className="flex flex-col items-center  justify-center">
        <span className="text-[25px] sm:text-[36px] text-white">{value}</span>
        <span className="text-white font-poppins text-[14px] sm:text-[16px]">
          {label}
        </span>
      </div>
    </div>
  );
}

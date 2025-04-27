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
    <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-center overflow-x-auto">
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
    <div className="flex items-center justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] bg-purple-900/30 backdrop-blur-md rounded-lg shadow-md px-3 py-2 sm:px-4 sm:py-3">
      <div className="flex flex-col items-center justify-center">
        <span className="text-[18px] sm:text-[24px] md:text-[32px] font-bold text-white">
          {value}
        </span>
        <span className="text-[10px] sm:text-[12px] md:text-[14px] font-poppins text-white">
          {label}
        </span>
      </div>
    </div>
  );
}

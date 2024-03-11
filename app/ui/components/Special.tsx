"use client";

import { useEffect, useState } from "react";

interface Props {
  title: string;
  description: string;
  expiration: Date;
}

export default function Special({ title, description, expiration }: Props) {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const pad = (num: number) => {
    let strNum = num.toString();

    while (strNum.length < 2) {
      strNum = "0" + strNum;
    }

    return strNum;
  };

  useEffect(() => {
    const target = expiration;

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      if (d < 0) {
        setDays("00");
      } else {
        setDays(pad(d));
      }

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      if (h < 0) {
        setHours("00");
      } else {
        setHours(pad(h));
      }

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      if (m < 0) {
        setMinutes("00");
      } else {
        setMinutes(pad(m));
      }

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      if (s < 0) {
        setSeconds("00");
      } else {
        setSeconds(pad(s));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center pt-12">
      <h1 className="text-7xl p-5">{title}</h1>
      <p className="text-3xl p-3">{description}</p>
      <p className="text-ai-blue text-3xl p-3">
        Time Remaining: {days}:{hours}:{minutes}:{seconds}
      </p>
    </div>
  );
}

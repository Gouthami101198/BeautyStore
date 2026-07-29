import "./Countdown.css";
import { useEffect, useState } from "react";

function Countdown() {
  const targetDate = new Date("August 6, 2026 23:59:59").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">

      <div className="countdown-content">

        <h2>🔥 Limited Time Beauty Sale</h2>

        <p>
          Get up to <span>50% OFF</span> on premium beauty products.
        </p>

        <div className="countdown-timer">

          <div className="time-box">
            <h3>{timeLeft.days}</h3>
            <span>Days</span>
          </div>

          <div className="time-box">
            <h3>{timeLeft.hours}</h3>
            <span>Hours</span>
          </div>

          <div className="time-box">
            <h3>{timeLeft.minutes}</h3>
            <span>Minutes</span>
          </div>

          <div className="time-box">
            <h3>{timeLeft.seconds}</h3>
            <span>Seconds</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Countdown;
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('LTS');

const getTimeOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [cityTime, setTime] = useState({ location, time: offset });
  const { time } = cityTime;

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime({ time });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{formatDate(getTimeOffset(time))}</div>
    </div>
  );
};

export default Clock;
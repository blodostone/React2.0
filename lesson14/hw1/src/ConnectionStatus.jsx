import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [statusConnection, setConnectionStatus] = useState({ status: 'online' });

  const { status } = statusConnection;

  useEffect(() => {
    const statusOnline = () => {
      setConnectionStatus({ status: 'online' });
    };

    const statusOffline = () => {
      setConnectionStatus({ status: 'offline' });
    };

    window.addEventListener('online', statusOnline);
    window.addEventListener('offline', statusOffline);

    return () => {
      window.removeEventListener('online', statusOnline);
      window.removeEventListener('offline', statusOffline);
    };
  }, [status]);

  return status == 'online' ? (
    <div className="status">{status}</div>
  ) : (
    <div className="status status_offline">{status}</div>
  );
};

export default ConnectionStatus;
'use client';

import { pusher } from '@/lib/pusher';
import React, { useEffect, useState } from 'react';

type Notification = {
  message: string;
};

const Page = () => {
  const [initialNotif, setInitialNotif] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/notification', {
        method: 'GET',
      });

      const data = await response.json();

      setInitialNotif(data.data);
    };

    fetchData();
  }, []);

  const [notif, setNotif] = useState<Notification[]>([]);
  useEffect(() => {
    const channel = pusher.subscribe('my-channel');
    const handleNotification = (data: { message: string }) => {
      setNotif((prev) => [...prev, data]);
    };

    channel.bind('notification', handleNotification);

    return () => {
      channel.unbind('notification', handleNotification);
      pusher.unsubscribe('my-channel');
    };
  }, []);

  return (
    <div>
      {initialNotif?.map((value, index) => (
        <p key={index}>{value.message}</p>
      ))}
      {notif?.map((value, index) => (
        <p key={index}>{value.message}</p>
      ))}
    </div>
  );
};

export default Page;

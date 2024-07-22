'use client';

import { useGetNotificationsAPI } from '@/src/apis/notification';

const Notification = () => {
  const data = useGetNotificationsAPI();
  if (!data) return null;
};

export default Notification;

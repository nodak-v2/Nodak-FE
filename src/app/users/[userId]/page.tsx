'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import PullToRefresh from 'react-simple-pull-to-refresh';

import ProfileBlock from '../_components/ProfileBlock';
import BadgeBlock from '../_components/badge';
import Posting from './_components/PostingList';

const UserPage = () => {
  const { userId } = useParams() as { userId: string };
  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    await queryClient.invalidateQueries({ queryKey: ['profile', userId] });
  };

  return (
    <PullToRefresh onRefresh={handleRefresh} pullingContent=''>
      <div className='flex h-full flex-col gap-6 overflow-y-auto'>
        <ProfileBlock />
        <BadgeBlock />
        <Posting />
      </div>
    </PullToRefresh>
  );
};

export default UserPage;

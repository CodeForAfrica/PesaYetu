import React from 'react';

import ExploreSection from '@/pesayetu/component/ExploreSection';
import { exploreTools } from '@/pesayetu/config';

export default function Home() {
  return (
    <>
      <ExploreSection {...exploreTools} />
    </>
  );
}

import React from 'react';

import ExploreSection from '@/pesayetu/component/ExploreSection';
import Page from '@/pesayetu/component/Page';
import { exploreTools } from '@/pesayetu/config';

export default function Home() {
  return (
    <Page>
      <ExploreSection {...exploreTools} />
    </Page>
  );
}

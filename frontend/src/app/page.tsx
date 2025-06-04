'use client';

// import Landing from '@/components/Landing/landing';

// export default function LandingPage() {
//   return <Landing />;
// }

import GuideHeader from '@/components/Common/GuideHeader';
import Guide from '@/components/Landing/guide';

export default function GuidePage() {
  return (
    <>
      <GuideHeader />
      <Guide />
    </>
  );
}

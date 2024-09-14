// src/pages/Calendly.tsx
import React, { Suspense } from 'react';

// Import the InlineWidget component directly if type declaration is correct
const CalendlyWidget = React.lazy(() => import('react-calendly').then(mod => ({ default: mod.InlineWidget })));

export default function Calendly() {
  return (
    <div id='book' className="min-w-[320px] h-[630px] max-lg:h-[800px] font-CooperLtBT_Regular mt-16 mb-28 text-lg">
      <Suspense fallback={<div>Loading...</div>}>
        <CalendlyWidget styles={{ height: '100%', minHeight: '750px', overflow: 'hidden' }} url="https://calendly.com/shawaalnadeem63/30min" />
      </Suspense>
    </div>
  );
}

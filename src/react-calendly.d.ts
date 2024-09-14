// src/react-calendly.d.ts
declare module 'react-calendly' {
  import { ComponentType } from 'react';

  export const InlineWidget: ComponentType<{ url: string; styles?: React.CSSProperties }>;

  // Add other exports if needed
}

'use client';

import { ThemeProvider as _ThemeProvider } from 'next-themes';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <_ThemeProvider attribute="class">{children}</_ThemeProvider>;
}

export default ThemeProvider;

'use client';

import { ReactNode, useEffect, useState } from 'react';

// This component wraps client-side components to ensure they only render on the client
export default function ClientProvider({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing on the server-side
  }

  return <>{children}</>;
}

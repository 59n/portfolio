import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <meta httpEquiv="refresh" content="0;url=/static-rebuild" />
  );
}

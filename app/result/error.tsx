'use client';

import Link from 'next/link';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="h-full flex flex-col gap-3 items-center justify-center">
      <p className="text-3xl font-bold">Sorry, we can't find cars</p>
      {error.message && <p className="text-3xl font-bold">{error.message}</p>}

      <Link href={'/'} className="py-1 px-3 bg-black text-white">
        Back
      </Link>
    </div>
  );
}

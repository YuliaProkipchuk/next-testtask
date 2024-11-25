'use client';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="h-full flex flex-col gap-3 items-center justify-center">
      <p className="text-3xl font-bold">Something went wrong!</p>
      {error.message && <p className="text-3xl font-bold">{error.message}</p>}
    </div>
  );
}

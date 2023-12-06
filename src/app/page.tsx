import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b rounded-xl border bg-gray-200 px-6 py-4  from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <span className="flex gap-2 items-center">
          <span className="w-3 h-3 rounded-full bg-green-600 animate-pulse" />
          Relay is active.
        </span>
      </p>
    </main>
  );
}

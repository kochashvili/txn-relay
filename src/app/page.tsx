import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b rounded-xl border bg-gray-200 p-4  from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <div className="flex gap-1 justify-center">
          <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse" />
          Relay is active.
        </div>
      </p>
    </main>
  );
}

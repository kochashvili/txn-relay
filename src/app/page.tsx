import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full overflow-hidden flex-col items-center justify-center p-24">
      <div className="before:absolute before:h-[300px] before:w-1/2 before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:left-0 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-1/2 after:translate-x-1/3 after:left-1/4 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" />
      <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b rounded-xl border bg-gray-200 px-6 py-4  from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <span className="flex gap-2 items-center">
          <span className="w-3 h-3 rounded-full bg-green-600 animate-pulse" />
          Relay is active.
        </span>
      </p>
    </main>
  );
}

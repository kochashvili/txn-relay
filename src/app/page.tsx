import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b rounded-xl border bg-gray-200 p-4  from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <div className="w-1 h-1 rounded-full" /> Relay is active. Get started by
        editing&nbsp;
        <code className="font-mono font-bold">src/app/page.tsx</code>
      </p>
    </main>
  );
}

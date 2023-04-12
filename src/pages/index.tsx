import { ChannelCard } from "@/components/channel-card";
import { channels } from "@/data/channels";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const runtime = "experimental-edge";

export default function Home() {
  return (
    <main
      className={`bg-pink-200 min-h-screen w-screen flex justify-center items-center ${inter.className}`}
    >
      <Head>
        <title>TV</title>
        <meta
          name="description"
          content="Liste TV liens pour regarder en direct"
        />
      </Head>
      <section className="grid grid-cols-6 gap-x-4 gap-y-4">
        {channels.map((channel, index) => (
          <div
            onClickCapture={() => {
              window.open(channel.url, "_blank");
            }}
            className="border-pink-400 p-2 border-2 rounded hover:shadow-lg cursor-pointer transition-shadow duration-300 group shadow-pink-300"
          >
            <ChannelCard
              className="h-32 w-32 relative group-hover:scale-105 transition-transform duration-300"
              key={`${channel.name}/${index}`}
              name={channel.name}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

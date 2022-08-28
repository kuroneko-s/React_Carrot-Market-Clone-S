import { NextPage } from "next";
import FloatingButton from "@components/floating_button";
import Layout from "@components/layout";
import { Stream } from "@prisma/client";
import useSWR from "swr";

interface StreamsResponse {
  ok: boolean;
  streams: Stream[];
}

const Live: NextPage = () => {
  const { data } = useSWR<StreamsResponse>(`/api/stream`);

  return (
    <Layout title="라이브" hasTabBar>
      <div className="divide-y-2 space-y-4">
        {data?.streams.map((stream) => (
          <div key={stream.id} className="pt-4">
            <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
            <h3 className="font-medium text-gray-600 text-lg mt-2">
              {stream.name}
            </h3>
          </div>
        ))}
        <FloatingButton
          pathData={
            "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          }
          url="/stream/create"
        />
      </div>
    </Layout>
  );
};

export default Live;

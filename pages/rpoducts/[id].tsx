import type { NextPage } from "next";
import ButtonWith from "@components/button_with";
import Layout from "@components/layout";
import Profile from "@components/profile";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="pt-3 pb-6">
        <div>
          <div className="bg-slate-300 h-96 rounded-md w-full" />
          <Profile context="Steve Jebs" subContext="View profile &rarr;" />

          <div className="mt-2 space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <p className="text-2xl">$140</p>
            <p className="text-base text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <ButtonWith
              buttonContext="Talk to seller"
              subBtnPath="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="mb-6 text-gray-900 text-2xl font-bold">
            Similar items
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="bg-slate-300 h-56 w-full rounded-md" />
                <h3 className="mt-2 text-base">Galaxy S60</h3>
                <p className="-mt-1 font-bold text-sm">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;

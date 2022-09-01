import type { NextPage } from "next";
import Layout from "@components/layout";
import * as ProfileComponent from "@components/profile";
import RoundButton from "@components/round_button";
import useUser from "@libs/client/useUser";
import useSWR from "swr";
import { Review, User } from "@prisma/client";

interface ReviewWithUser extends Review {
  createdBy: User;
}

interface ReviewResponse {
  ok: boolean;
  reviews: ReviewWithUser[];
}

const Profile: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ReviewResponse>("/api/reviews");

  return (
    <Layout title="나의 당근" hasTabBar>
      <div className="space-y-6">
        <ProfileComponent.default
          id={user?.id + ""}
          context={isLoading ? "Loading..." : user?.name}
          subContext="View profile &rarr;"
          url="/profile/edit"
          avatarURL={user?.avatar}
        />

        <div className="flex items-center justify-between px-12">
          <RoundButton
            pathData="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            title="판매내역"
            url="/profile/sold"
          />
          <RoundButton
            pathData="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            title="구매내역"
            url="/profile/bought"
          />
          <RoundButton
            pathData="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            title="관심목록"
            url="/profile/loved"
          />
        </div>
        {data?.reviews.map((review) => (
          <div key={review.id}>
            <div className="space-y-2">
              <ProfileComponent.default
                id={review.id + ""}
                context={review.createdBy.name}
                subContext=""
                isSmall
                noneText
                score={review.score}
              />
              <div>
                <p className="text-base text-gray-900">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Profile;

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-24 flex flex-col space-y-5">
      <div className="bg-white p-7 rounded-2xl shadow-lg">
        <span className="font-bold text-2xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-bold">$19</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Tooly Chair</span>
          <span className="font-bold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-bold">$38</span>
        </div>
        <div className="mt-5 bg-blue-600 text-white p-3 text-center rounded-xl w-3/5 mx-auto">
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-lg">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 justify-between items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Orders</span>
              <span className="font-bold">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Spent</span>
              <span className="font-bold">$2.310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-bold">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-lg"></div>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 xl:place-content-center py-10 px-14 grid lg:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen">
      <div className="bg-white black flex flex-col justify-between sm:bg-red-400 md:bg-teal-400 lg:bg-purple-300 xl:bg-indigo-300 2xl:bg-yellow-100 p-7 rounded-2xl shadow-lg">
        <span className="font-bold text-2xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              className="flex justify-between my-2 odd:bg-blue-50 even:bg-red-50"
              key={n}
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-bold">$19</span>
            </div>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-bold">$38</span>
        </div>
        <button
          className="mt-5 bg-blue-600 text-white p-3 text-center rounded-xl w-3/5 mx-auto
        hover:bg-yellow-400
        "
        >
          Checkout
        </button>
      </div>

      <div className="bg-white overflow-hidden rounded-2xl shadow-lg group">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-44 landscape:bg-teal-300">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 justify-between items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Orders</span>
              <span className="font-bold">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-400 rounded-full group-hover:bg-yellow-100 transition-colors" />
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

      <div className="bg-white p-5 rounded-2xl shadow-lg lg:col-span-2 xl:col-span-1">
        <div className="flex justify-between mb-5">
          <span>🔙</span>
          <div className="space-x-3">
            <span>❇️4.9</span>
            <span className="shadow-xl p-1 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-bold mb-1.5 text-xl ">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center ">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-400 focus:ring-2 ring-offset-2 ring-yellow-400 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-400 focus:ring-2 ring-offset-2 ring-indigo-400 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5 text-xl text-gray-700">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-xl">$450</span>
            <div className="bg-blue-500 text-center text-white rounded-lg py-3 px-7 text-sm">
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Layout from "./../components/layout";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="px-4 py-14 flex flex-col">
        <textarea
          rows={4}
          className="mt-1 resize-none appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          placeholder="Write a question!"
        />
        <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;

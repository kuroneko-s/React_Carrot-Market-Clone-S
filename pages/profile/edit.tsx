import { NextPage } from "next";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const EditProfile: NextPage = () => {
  return (
    <div className="mt-12 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-400" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md text-sm font-bold focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-orange-400 text-gray-700"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="email"
          className="appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>

      <div className="">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500 select-none">
            +82
          </span>
          <input
            id="phone"
            type="number"
            className="py-2 px-4 appearance-none w-full border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md rounded-l-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
      </div>

      <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Update Profile
      </button>
    </div>
  );
};

export default EditProfile;

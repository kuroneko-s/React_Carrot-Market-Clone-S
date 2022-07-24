import { NextPage } from "next";
import ButtonComponent from "../../components/button_component";
import InputComponent from "../../components/input_component";
import Layout from "../../components/layout";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-400" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md text-sm font-bold focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-orange-400 text-gray-700"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        <div className="space-y-1">
          <InputComponent
            labelContext="Email address"
            id="email"
            placeholder="test@test.com"
          />
          <InputComponent
            labelContext="Phone number"
            placeholder=""
            id="phone"
            type="phone"
            countryCode="+82"
          />
        </div>

        <ButtonComponent context="Update Profile" />
      </div>
    </Layout>
  );
};

export default EditProfile;

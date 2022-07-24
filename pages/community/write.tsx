import type { NextPage } from "next";
import TextBox from "../../components/textbox";
import Layout from "../../components/layout";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="flex flex-col">
        <TextBox placeholder="Write a question!" buttonContext="Submit" />
      </form>
    </Layout>
  );
};

export default Write;

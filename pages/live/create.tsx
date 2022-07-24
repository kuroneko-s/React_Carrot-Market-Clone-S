import { NextPage } from "next";
import InputComponent from "../components/input_component";
import TextBox from "../components/textbox";
import Layout from "./../components/layout";

const LiveCreater: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-5">
        <InputComponent
          id="name"
          placeholder="라이브 제목"
          labelContext="Name"
        />
        <InputComponent
          id="price"
          placeholder="0.00"
          labelContext="Price"
          type="price"
          currency="USD"
          currencySymbol="$"
        />
        <TextBox
          buttonContext="Go Live"
          placeholder="라이브에 대해 설명을 적어주세요!"
          labelName="Description"
          hasLabel
        />
      </div>
    </Layout>
  );
};

export default LiveCreater;

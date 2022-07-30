import renderer from "react-test-renderer";
import Highlight from "../../../components/Highlight";
import React from "react";

it("Highlight Component renders correctly", () => {
  const component = renderer
    .create(<Highlight text={"Test Message"} regexTerm={"Test"} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

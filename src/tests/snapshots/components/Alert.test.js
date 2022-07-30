import renderer from "react-test-renderer";
import Alert from "../../../components/Alert";
import React from "react";

it("Alert Component renders correctly", () => {
  const component = renderer
    .create(<Alert message={"Test Message"} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

it("Alert Component renders correctly", () => {
    const component = renderer
      .create(<Alert message={"Test Message"} isShow={true} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

it("Alert Component renders correctly", () => {
    const component = renderer
      .create(<Alert message={"Test Message"} isShow={true} type="error" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
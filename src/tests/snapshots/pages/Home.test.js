import renderer from "react-test-renderer";
import Home from "../../../pages/Home";
import React from "react";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
  }));

it("Home Component renders correctly", () => {
  const component = renderer.create(<Home />).toJSON();
  expect(component).toMatchSnapshot();
});

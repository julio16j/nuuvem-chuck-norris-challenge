import renderer from "react-test-renderer";
import SearchField from "../../../components/SearchField";
import React from "react";
it("Search Field Component renders correctly", () => {
  const component = renderer.create(<SearchField searchTerm={""} />).toJSON();
  expect(component).toMatchSnapshot();
});

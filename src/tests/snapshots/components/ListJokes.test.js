import renderer from "react-test-renderer";
import ListJokes from "../../../components/ListJokes";
import React from "react";
import jokesListFactory from '../../testUtils/jokesListFactory'

it("List of jokes renders correctly", () => {
  const component = renderer
    .create(<ListJokes jokes={jokesListFactory()} searchTerm={""} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

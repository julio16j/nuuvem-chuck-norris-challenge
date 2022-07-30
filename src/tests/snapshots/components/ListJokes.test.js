import renderer from "react-test-renderer";
import ListJokes from "../../../components/ListJokes";
import React from "react";
const mockJoke = {
  value:
    "Chuck Norris can turn even the safest firework into an instrument of mass destruction."
};

const mockListJokes = [];
for (let i = 0; i < 5; i++) {
  mockListJokes.push({...mockJoke});
}

it("List of jokes renders correctly", () => {
  const component = renderer
    .create(<ListJokes jokes={mockListJokes} searchTerm={""} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

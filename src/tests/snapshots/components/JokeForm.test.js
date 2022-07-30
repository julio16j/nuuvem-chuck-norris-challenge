import renderer from "react-test-renderer";
import JokeForm from "../../../components/JokeForm";
import React from "react";

const mockJokeWithCategories = {
  categories: ["firework", "safe", "instrument"],
  created_at: "2020-01-05 13:42:23.484083",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "eFDrEXsBSi-h8w0zdH5MHQ",
  updated_at: "2020-01-05 13:42:23.484083",
  url: "https://api.chucknorris.io/jokes/eFDrEXsBSi-h8w0zdH5MHQ",
  value:
    "Chuck Norris can turn even the safest firework into an instrument of mass destruction."
};

const mockJokeWithoutCategory = { ...mockJokeWithCategories, categories: [] };

const mockJokeWithOneCategory = {
  ...mockJokeWithCategories,
  categories: ["firework"]
};

it("Detail Joke Component with categories renders correctly", () => {
  const component = renderer
    .create(<JokeForm joke={mockJokeWithCategories} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

it("Detail Joke Component without categories renders correctly", () => {
  const component = renderer
    .create(<JokeForm joke={mockJokeWithoutCategory} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

it("Detail Joke Component with one category renders correctly", () => {
  const component = renderer
    .create(<JokeForm joke={mockJokeWithOneCategory} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

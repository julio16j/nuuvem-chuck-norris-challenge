import SearchJokes from "../../../pages/SearchJokes";
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from "react";
import ChuckNorrisService from '../../../services/ChuckNorrisService'
import jokesListFactory from '../../testUtils/jokesListFactory'
jest.mock('../../../services/ChuckNorrisService')

it("Should SearchJokes Component renders correctly", () => {
    render(<SearchJokes />);
    const linkElement = screen.getByText("Search");
    expect(linkElement).toBeInTheDocument();
});

test("if click on random button will call randomJoke function", () => {
  render(<SearchJokes />);
  userEvent.click(screen.getByText("I'm feeling lucky"))
  expect(ChuckNorrisService.getRandomJokeFromSearchTerm).toHaveBeenCalled();
});

test("if click on alert component will close the element", () => {
  render(<SearchJokes />);
  userEvent.click(screen.getByText("Search"))
  userEvent.click(screen.getByText("Please type a least 3 characters"))
  const alertHided = screen.getByText("Please type a least 3 characters")
  expect(alertHided).toHaveClass('hide');
});

test("if click on search button with text on input will call search function", () => {
  render(<SearchJokes />);
  ChuckNorrisService.getJokesFromSearchTerm.mockResolvedValueOnce({data: {result: jokesListFactory()}})
  const input = screen.getByPlaceholderText("Search")
  fireEvent.change(input, {target: {value: 'test'}})
  userEvent.click(screen.getByText("Search"))
  expect(ChuckNorrisService.getJokesFromSearchTerm).toHaveBeenCalled();
});

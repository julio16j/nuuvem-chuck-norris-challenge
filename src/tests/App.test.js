import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import React from 'react'
import ChuckNorrisService from '../services/ChuckNorrisService'
import jokesListFactory from './testUtils/jokesListFactory'
jest.mock('../services/ChuckNorrisService')
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Search");
  expect(linkElement).toBeInTheDocument();
});

test("if click on search button with text on input will navigate", async () => {
  ChuckNorrisService.getJokesFromSearchTerm.mockResolvedValueOnce({data: {result: jokesListFactory()}})
  render(<App />);
  const input = screen.getByPlaceholderText("Search")
  fireEvent.change(input, {target: {value: 'test'}})
  userEvent.click(screen.getByText("Search"))
  const inputFounded = screen.getByDisplayValue('test')
  expect(inputFounded).toBeInTheDocument()
});

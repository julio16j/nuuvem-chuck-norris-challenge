import Home from "../../../pages/Home"
import { render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from "react"
import ChuckNorrisService from '../../../services/ChuckNorrisService'

const mockNavigate = jest.fn()

jest.mock('../../../services/ChuckNorrisService')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe("Home Page test cases", () => {

  test("if click on search button without text on input will appears and the " +
    "alert and renders correctly", () => {
    render(<Home />);
    userEvent.click(screen.getByText("Search"))
    const alertError = screen.getByText("Please type a least 3 characters")
    expect(alertError).toBeInTheDocument();
  });

  test("if click on alert component will close the element", () => {
    render(<Home />);
    userEvent.click(screen.getByText("Search"))
    userEvent.click(screen.getByText("Please type a least 3 characters"))
    const alertHided = screen.getByText("Please type a least 3 characters")
    expect(alertHided).toHaveClass('hide');
  });

  test("if click on search button with text on input will call navigate function", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText("Search")
    fireEvent.change(input, {target: {value: 'test'}})
    userEvent.click(screen.getByText("Search"))
    expect(mockNavigate).toHaveBeenCalled();
  });

  test("if click on random button will call randomJoke function", () => {
    render(<Home />);
    userEvent.click(screen.getByText("I'm feeling lucky"))
    expect(ChuckNorrisService.getRandomJokeFromSearchTerm).toHaveBeenCalled();
  });
})

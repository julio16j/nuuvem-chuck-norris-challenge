import SearchJokes from "../../../pages/SearchJokes";
import { render, screen } from '@testing-library/react';
import React from "react";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => (jest.fn())
  }));

it("SearchJokes Component renders correctly", () => {
    render(<SearchJokes />);
    const linkElement = screen.getByText("Search");
    expect(linkElement).toBeInTheDocument();
});
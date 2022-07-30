import renderer from "react-test-renderer";
import DetailJoke from "../../../components/DetailJoke";
import React from "react";
import { render, screen } from '@testing-library/react';

it("Detail Joke Component when loading renders correctly", () => {
    const { container } = render(<DetailJoke state={{open: true, loading: true}} />);
    const element = container.getElementsByClassName("d-flex justify-content-center align-items-center");
  expect(element.length).toBeGreaterThan(0);
}); 
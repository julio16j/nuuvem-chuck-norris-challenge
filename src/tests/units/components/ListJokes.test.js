import ListJokes from "../../../components/ListJokes"
import { render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from "react"
import jokesListFactory from '../../testUtils/jokesListFactory'

const detailMockFunction = jest.fn()
describe("ListJokes Component", () => {

  test("if click on a joke the will call the detailFunction", () => {
    render(<ListJokes jokes={jokesListFactory()} searchTerm={""} detailFunction={detailMockFunction} />);
    const renderedJokes = screen.getAllByText(jokesListFactory()[0].value)
    expect(renderedJokes.length).toBeGreaterThan(0)
    userEvent.click(renderedJokes[0])
    expect(detailMockFunction).toHaveBeenCalled();
  });

})

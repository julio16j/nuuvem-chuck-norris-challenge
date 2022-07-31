import SearchField from "../../../components/SearchField"
import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from "react"

const searchMockFunction = jest.fn()
describe("SearchField Component", () => {

  test("if click on a joke the will call the detailFunction", () => {
    render(<SearchField searchTerm={""} searchJokes={searchMockFunction} />);
    const searchInput = screen.getByPlaceholderText("Search")
    userEvent.type(searchInput, "{Enter}")
    expect(searchMockFunction).toHaveBeenCalled();
  });
})

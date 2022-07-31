import DetailJoke from "../../../components/DetailJoke"
import React from "react"
import { render } from '@testing-library/react'

test("if Detail Joke Component when loading renders correctly", () => {
    const { container } = render(<DetailJoke state={{open: true, loading: true}} closeFunction={() =>{}} />)
  expect(container).toBeInTheDocument()
})
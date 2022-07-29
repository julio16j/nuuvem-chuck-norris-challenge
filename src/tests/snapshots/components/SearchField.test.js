import renderer from "react-test-renderer";
import SearchField from "../../../components/SearchField";
import React from "react";
it("Search Field Component renders correctly", () => {
  const component = renderer.create(<SearchField searchTerm={""} />).toJSON();
  expect(component).toMatchInlineSnapshot(`
<main>
  <div
    className="searchField"
  >
    <div
      className="input-group mb-3"
    >
      <div
        className="input-group-prepend"
      >
        <span
          className="input-group-text"
          id="basic-addon1"
        >
          <svg
            aria-hidden="true"
            className="svg-inline--fa fa-magnifying-glass "
            data-icon="magnifying-glass"
            data-prefix="fas"
            focusable="false"
            role="img"
            style={Object {}}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
              fill="currentColor"
              style={Object {}}
            />
          </svg>
        </span>
      </div>
      <input
        onChange={[Function]}
        onKeyDown={[Function]}
        placeholder="Search"
        type="text"
        value=""
      />
    </div>
  </div>
  <div
    className="d-flex justify-content-center"
  >
    <button
      className="searchButton"
      onClick={[Function]}
    >
      Search
    </button>
    <button
      className="searchButton"
      onClick={[Function]}
    >
      I'm feeling lucky
    </button>
  </div>
</main>
`);
});

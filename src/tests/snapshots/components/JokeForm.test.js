import renderer from "react-test-renderer";
import JokeForm from "../../../components/JokeForm";
import React from "react";
const mockJokeWithCategory = {
  categories: ["firework"],
  created_at: "2020-01-05 13:42:23.484083",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "eFDrEXsBSi-h8w0zdH5MHQ",
  updated_at: "2020-01-05 13:42:23.484083",
  url: "https://api.chucknorris.io/jokes/eFDrEXsBSi-h8w0zdH5MHQ",
  value:
    "Chuck Norris can turn even the safest firework into an instrument of mass destruction."
};

const mockJokeWithoutCategory = { ...mockJokeWithCategory, categories: [] };

it("Detail Joke Component with categories renders correctly", () => {
  const component = renderer
    .create(<JokeForm joke={mockJokeWithCategory} />)
    .toJSON();
  expect(component).toMatchInlineSnapshot(`
<aside>
  <header>
    <h4>
      <svg
        aria-hidden="true"
        className="svg-inline--fa fa-hashtag "
        data-icon="hashtag"
        data-prefix="fas"
        focusable="false"
        role="img"
        style={
          Object {
            "color": "var(--orange-white)",
          }
        }
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M416 127.1h-58.23l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L292.9 127.1H197.8l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L132.9 127.1H64c-17.67 0-32 14.33-32 32C32 177.7 46.33 191.1 64 191.1h58.23l-21.33 128H32c-17.67 0-32 14.33-32 32c0 17.67 14.33 31.1 32 31.1h58.23l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C108.5 479.9 110.3 480 112 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27h95.12l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C268.5 479.9 270.3 480 272 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27H384c17.67 0 32-14.33 32-31.1c0-17.67-14.33-32-32-32h-58.23l21.33-128H416c17.67 0 32-14.32 32-31.1C448 142.3 433.7 127.1 416 127.1zM260.9 319.1H165.8L187.1 191.1h95.12L260.9 319.1z"
          fill="currentColor"
          style={Object {}}
        />
      </svg>
       Id: 
      eFDrEXsBSi-h8w0zdH5MHQ
    </h4>
  </header>
  <main>
    <section>
      <p>
         
        <svg
          aria-hidden="true"
          className="svg-inline--fa fa-face-laugh-wink "
          data-icon="face-laugh-wink"
          data-prefix="fas"
          focusable="false"
          role="img"
          style={
            Object {
              "color": "var(--orange-white)",
            }
          }
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM300.8 217.6C318.4 194.1 353.6 194.1 371.2 217.6C376.5 224.7 386.5 226.1 393.6 220.8C400.7 215.5 402.1 205.5 396.8 198.4C366.4 157.9 305.6 157.9 275.2 198.4C269.9 205.5 271.3 215.5 278.4 220.8C285.5 226.1 295.5 224.7 300.8 217.6z"
            fill="currentColor"
            style={Object {}}
          />
        </svg>
         Joke: 
        Chuck Norris can turn even the safest firework into an instrument of mass destruction.
      </p>
    </section>
    <section>
      <p>
         
        <svg
          aria-hidden="true"
          className="svg-inline--fa fa-filter "
          data-icon="filter"
          data-prefix="fas"
          focusable="false"
          role="img"
          style={
            Object {
              "color": "var(--orange-white)",
            }
          }
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"
            fill="currentColor"
            style={Object {}}
          />
        </svg>
         Categories:
         firework
      </p>
    </section>
  </main>
  <footer
    className="d-flex justify-content-between align-items-center"
  >
    <svg
      aria-hidden="true"
      className="svg-inline--fa fa-calendar-days "
      data-icon="calendar-days"
      data-prefix="fas"
      focusable="false"
      role="img"
      style={
        Object {
          "color": "var(--orange-white)",
          "marginBottom": "11px",
        }
      }
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"
        fill="currentColor"
        style={Object {}}
      />
    </svg>
    <p
      className="ml-2"
    >
      Created At: 
      01/05/2020
    </p>
    <p
      className="ml-2"
    >
      Updated At: 
      01/05/2020
    </p>
  </footer>
</aside>
`);
});

it("Detail Joke Component without categories renders correctly", () => {
  const component = renderer
    .create(<JokeForm joke={mockJokeWithoutCategory} />)
    .toJSON();
  expect(component).toMatchInlineSnapshot(`
<aside>
  <header>
    <h4>
      <svg
        aria-hidden="true"
        className="svg-inline--fa fa-hashtag "
        data-icon="hashtag"
        data-prefix="fas"
        focusable="false"
        role="img"
        style={
          Object {
            "color": "var(--orange-white)",
          }
        }
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M416 127.1h-58.23l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L292.9 127.1H197.8l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L132.9 127.1H64c-17.67 0-32 14.33-32 32C32 177.7 46.33 191.1 64 191.1h58.23l-21.33 128H32c-17.67 0-32 14.33-32 32c0 17.67 14.33 31.1 32 31.1h58.23l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C108.5 479.9 110.3 480 112 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27h95.12l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C268.5 479.9 270.3 480 272 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27H384c17.67 0 32-14.33 32-31.1c0-17.67-14.33-32-32-32h-58.23l21.33-128H416c17.67 0 32-14.32 32-31.1C448 142.3 433.7 127.1 416 127.1zM260.9 319.1H165.8L187.1 191.1h95.12L260.9 319.1z"
          fill="currentColor"
          style={Object {}}
        />
      </svg>
       Id: 
      eFDrEXsBSi-h8w0zdH5MHQ
    </h4>
  </header>
  <main>
    <section>
      <p>
         
        <svg
          aria-hidden="true"
          className="svg-inline--fa fa-face-laugh-wink "
          data-icon="face-laugh-wink"
          data-prefix="fas"
          focusable="false"
          role="img"
          style={
            Object {
              "color": "var(--orange-white)",
            }
          }
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM300.8 217.6C318.4 194.1 353.6 194.1 371.2 217.6C376.5 224.7 386.5 226.1 393.6 220.8C400.7 215.5 402.1 205.5 396.8 198.4C366.4 157.9 305.6 157.9 275.2 198.4C269.9 205.5 271.3 215.5 278.4 220.8C285.5 226.1 295.5 224.7 300.8 217.6z"
            fill="currentColor"
            style={Object {}}
          />
        </svg>
         Joke: 
        Chuck Norris can turn even the safest firework into an instrument of mass destruction.
      </p>
    </section>
    <section />
  </main>
  <footer
    className="d-flex justify-content-between align-items-center"
  >
    <svg
      aria-hidden="true"
      className="svg-inline--fa fa-calendar-days "
      data-icon="calendar-days"
      data-prefix="fas"
      focusable="false"
      role="img"
      style={
        Object {
          "color": "var(--orange-white)",
          "marginBottom": "11px",
        }
      }
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"
        fill="currentColor"
        style={Object {}}
      />
    </svg>
    <p
      className="ml-2"
    >
      Created At: 
      01/05/2020
    </p>
    <p
      className="ml-2"
    >
      Updated At: 
      01/05/2020
    </p>
  </footer>
</aside>
`);
});

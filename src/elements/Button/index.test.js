import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// ! anotger test for render loading/spinner
test("Should render loading/spninner", () => {
  const { container, getByText } = render(<Buatton isLoading></Buatton>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

// ! another test for render tag a
test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

// ! another test for Link component
test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link" isExternal></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import AutoType from "./AutoType";

describe('AutoType Component', () => {
  afterEach(cleanup);

  const constantMockup = {complement: "test"};

  test('render complement prop test', () => {
    render(<AutoType complement={constantMockup.complement}/>)

    expect(screen.getByText(constantMockup.complement)).toBeInTheDocument();
    expect(screen.getByTestId("auto-type-wrapper")).toBeInTheDocument();
  });

})

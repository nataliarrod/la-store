import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import About from "./About";
import aboutConstants, { typeWriterConstants } from "./constants";

describe("About Component", () => {
  afterEach(cleanup);

  test("render elements of the about", () => {
    render(<About/>)

    expect(screen.getByText(aboutConstants.title)).toBeInTheDocument();
    expect(screen.getByTestId("about-text")).toBeInTheDocument();
    expect(screen.getByText(aboutConstants.content)).toBeInTheDocument();
    expect(screen.getByAltText("imagen diana rodriguez")).toBeInTheDocument();
    expect(screen.getByTestId("auto-type-wrapper")).toBeInTheDocument();
  });
})

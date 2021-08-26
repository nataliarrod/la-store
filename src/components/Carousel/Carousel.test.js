import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Carousel from ""./Carousel";

describe("Carousel Component", () => {
  afterEach(cleanup);

  test("render elements of the carousel", () => {
    render(<Carousel/>);

    expect(screen.getByLabelText("Next")).toBeInTheDocument();
    expect(screen.getByLabelText("Previous")).toBeInTheDocument();
    expect(screen.getByAltText("imagenes del Carrousel")).toBeInTheDocument();
  });
})

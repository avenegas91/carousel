import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// Smoke Test

it("renders without crashing", () => {
    render(<Card />);
});

// Snapshot Test

it("matches snapshot created", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});
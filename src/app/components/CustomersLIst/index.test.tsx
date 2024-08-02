/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import CustomersList from "./index";

it("App Router: Works with Server Components", () => {
  render(<CustomersList />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});

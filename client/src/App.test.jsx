import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should be render all the news", () => {
  render(<App />);
  const news = screen.getByText(/Scraping HackRank/i);
  expect(news).toBeInTheDocument();
});

import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { CardNews } from "./CardNews";
import { DataContext } from "../../contex/DataContext";

const newsDataMock = [
  {
    rank: "1.",
    title:
      "Comparing our Rust-based indexing and querying pipeline to Langchain",
    points: "44 points",
    comments: "20 comments",
  },
  {
    rank: "2.",
    title: "Is the world really running out of sand?",
    points: "178 points",
    comments: "30 comments",
  },
  {
    rank: "3.",
    title: "Comedy Theory (2022)",
    points: "25 points",
    comments: "205 comments",
  },
];

const NewsDataMockProvider = ({ children }) => {
  return (
    <DataContext.Provider value={newsDataMock}>{children}</DataContext.Provider>
  );
};

test("should render the updated title and comments", () => {
  render(
    <NewsDataMockProvider>
      <CardNews />
    </NewsDataMockProvider>
  );
  const title = screen.getByText("Comedy Theory (2022)");
  const points = screen.getByText(/25 points/i);
  expect(title).toBeInTheDocument();
  expect(points).toBeInTheDocument();
});

test("should order by 5 words when click", () => {
  render(
    <NewsDataMockProvider>
      <CardNews />
    </NewsDataMockProvider>
  );

  const button = screen.getByText("Mas 5");
  fireEvent.click(button);
  const orderBy = screen.getAllByRole("heading", { level: 2 });
  expect(orderBy[0]).toHaveTextContent(
    "Is the world really running out of sand?"
  );
  expect(orderBy[1]).toHaveTextContent(
    "Comparing our Rust-based indexing and querying pipeline to Langchain"
  );
});

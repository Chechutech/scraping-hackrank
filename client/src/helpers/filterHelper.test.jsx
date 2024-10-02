import { extractWords, filterLessFiveWords } from "./filterHelper";
import { expect, test } from "vitest";

test("should extract only words from a string", () => {
  const text =
    "Show HN: Facad – A colorful directory listing tool for the command line";
  const expectedOutcome = [
    "Show",
    "HN",
    "Facad",
    "A",
    "colorful",
    "directory",
    "listing",
    "tool",
    "for",
    "the",
    "command",
    "line",
  ];

  expect(extractWords(text)).toEqual(expectedOutcome);
});

test("should filter less than five words order by points", () => {
  const titleData = [
    { title: "Bop Spotter", points: "20 points" },
    { title: "Comedy Theory (2022)", points: "50 points" },
    {
      title: "PyTorch Native Architecture Optimization: Torchao",
      points: "38 points",
    },
  ];
  const filterWords = filterLessFiveWords(titleData);
  expect(filterWords).toEqual([
    { title: "Comedy Theory (2022)", points: "50 points" },
    {
      title: "PyTorch Native Architecture Optimization: Torchao",
      points: "38 points",
    },
    { title: "Bop Spotter", points: "20 points" },
  ]);
});

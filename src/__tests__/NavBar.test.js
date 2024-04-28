import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("renders three <a> elements with correct text and href attributes", () => {
  render(<NavBar />);
  
  const links = screen.getAllByRole('link');

  expect(links).toHaveLength(3);

  expect(links[0]).toHaveTextContent(/home/i);
  expect(links[1]).toHaveTextContent(/about/i);
  expect(links[2]).toHaveTextContent(/projects/i);

  expect(links[0]).toHaveAttribute('href', '#home');
  expect(links[1]).toHaveAttribute('href', '#about');
  expect(links[2]).toHaveAttribute('href', '#projects');
});

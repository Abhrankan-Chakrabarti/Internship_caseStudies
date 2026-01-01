// __tests__/CommentBox.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import CommentBox from "../src/components/CommentBox";

test("posts comment and clears input", () => {
  const mockOnPost = jest.fn();
  render(<CommentBox onPost={mockOnPost} />);

  const input = screen.getByPlaceholderText("Write a comment...");
  const button = screen.getByText("Post");

  fireEvent.change(input, { target: { value: "Hello World" } });
  fireEvent.click(button);

  expect(mockOnPost).toHaveBeenCalledWith("Hello World");
  expect(input).toHaveValue("");
});

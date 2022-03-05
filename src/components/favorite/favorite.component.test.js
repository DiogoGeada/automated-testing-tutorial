import { fireEvent, render, screen } from "@testing-library/react";
import Favorite from "./favorite";

describe("Button 'favorite'", () => {

    it("Displays correctly", () => {
        render(<Favorite></Favorite>);

        expect(screen.getByRole("button")).not.toHaveClass("active");
    });

    it("Marks as favorite", () => {
        render(<Favorite></Favorite>)

        let button = screen.getByRole("button");
        fireEvent.click(button);
        expect(button).toHaveClass("active");
    });

    it("Remove favorite", () => {
        render(<Favorite></Favorite>)

        let button = screen.getByRole("button");
        
        fireEvent.click(button);
        expect(button).toHaveClass("active");

        fireEvent.click(button);
        expect(button).not.toHaveClass("active");
    });
});
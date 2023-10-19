import { test, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import App from "../App";
import { fireEvent } from "@testing-library/react";

 

test("renders App component", () => {
    // renders the App component for testing
    render(<App />);
    const headline = screen.getByText(/My Todolist/i);
    expect(headline).toBeInTheDocument();
    });

    test("add todo", () => {
        render(<App />);

        const desc = screen.getByLabelText("Description");
        fireEvent.change(desc, { target: { value: "Go to coffee" } });

        const prior = screen.getByLabelText("Priority");
        fireEvent.change(prior, { target: { value: "one" } });


        const date = screen.getByPlaceholderText("MM/DD/YYYY");
        fireEvent.change(date, { target: { value: "29.01.2023" } });

        const button = screen.getByText("Add Todo");
        fireEvent.click(button);
        const table = screen.getByTitle("table");
        expect(table).toHaveTextContent(/Go to coffee/i);
        });



test("Clears Todos", () => {
    // Adds test todo, and clears it afterwards
    render(<App />);

    const desc = screen.getByLabelText("Description");
    fireEvent.change(desc, { target: { value: "Go to coffee" } });

    const prior = screen.getByLabelText("Priority");
    fireEvent.change(prior, { target: { value: "one" } });


    const date = screen.getByPlaceholderText("MM/DD/YYYY");
    fireEvent.change(date, { target: { value: "29.01.2023" } });

    const button = screen.getByText("Add Todo");
    fireEvent.click(button);
    const table = screen.getByTitle("table");
    expect(table).toHaveTextContent(/Go to coffee/i);

    const clearTodos = screen.getByText('Clear');
    fireEvent.click(clearTodos);
    expect(table).toHaveTextContent(/No Rows To Show/i);

});
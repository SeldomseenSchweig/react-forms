import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingList from "./ShoppingList";
import '@testing-library/jest-dom/extend-expect';


test("renders without crashing", function (){

    render(<ShoppingList />);
});

test("matches snapshot", function () {
    const {asFragment} = render(<ShoppingList />)
    expect (asFragment()).toMatchSnapshot();
});

test("should add new item", ()=>{

    const {queryByText, getByLabelText} = render(<ShoppingList />)
    const input = getByLabelText('Product Name')
    const button = queryByText('Submit')
    expect(queryByText('Product Name: Peanut Butter')).not.toBeInTheDocument();
    fireEvent.change(input,{target:{value: "Peanut Butter"}});
    fireEvent.click(button);
    expect(queryByText('Product Name: Peanut Butter')).toBeInTheDocument();




})
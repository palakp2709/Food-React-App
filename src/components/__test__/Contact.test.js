import Contact from "../Contact";
import { render ,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// grouping the tect ccase;
describe("loading test" , () =>{

    test("should load heading inside contact component" , () =>{
        render(<Contact/>)
       
        //QUERYING - RETURN REACT ELEMENT-(js object)
        const heading = screen.getByRole("heading")
        
        //ASSERTION
        expect(heading).toBeInTheDocument();
    });
    
    test("should load button inside contact component" , () =>{
         render(<Contact/>)
    
         const button = screen.getByText("submit");
    
         expect(button).toBeInTheDocument()
    });
    
    it("should be 2 textbox inside contact component" , () =>{
    
        render(<Contact/>)
    
        const inputboxes = screen.getAllByRole("textbox")
    
        expect(inputboxes.length).toBe(2)
    }) 
})

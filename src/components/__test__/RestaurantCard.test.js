import RestaurantCard from "../RestaurantCard";
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mockData/ResCardMockData.json"

it("should render RestaurantCard Component with props Data" , () =>{

    render(
        
        <RestaurantCard foodData={MOCK_DATA}/>
    )

    const name = screen.getByText("Mr. Biryani");

    expect(name).toBeInTheDocument() 
}) 
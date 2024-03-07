import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import Mock_Data from "../mockData/ResListMockData.json"
import { act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn( () =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(Mock_Data)
        }
    })
});

it("should search res list for restaurant text input" , async() =>{
    await act( async () =>
         render(<BrowserRouter><Body/></BrowserRouter> )
    )

    const cardBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardBeforeSearch.length).toBe(9)

    const searchBtn = screen.getByRole("button" , {name : "Search"});
    const searchInput = screen.getByTestId("searchInput");

    
    fireEvent.change(searchInput , {target : {value : "restaurant"}});
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2)  
}) 


it("should filter top reated restaurant" , async () =>{
     await act( async () =>
          render(
            <BrowserRouter>
              <Body/>
            </BrowserRouter>
          )
     )

     const cardsBeforeFilter = screen.getAllByTestId("resCard");
     expect(cardsBeforeFilter.length).toBe(9)

     const topRatedResBtn = screen.getByRole("button" , {name : "Top Rated Restaurants"});
    
     fireEvent.click(topRatedResBtn);
     const cardsAfterFilter = screen.getAllByTestId("resCard");
     expect(cardsAfterFilter.length).toBe(4)

})

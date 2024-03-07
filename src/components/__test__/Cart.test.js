import { fireEvent, render , screen } from "@testing-library/react"
import { act } from "react-test-renderer"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mockData/ResMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore"
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";


global.fetch = jest.fn( () =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA)
        }
    })
});

it("Should load the Restaurant Menu Component, should add items into the cart by click on Add button, should update the cart component " , 
  async() =>{
    await act( async () => 
      render(
        <Provider store={appStore}>
            <BrowserRouter>
             <Header/>
             <RestaurantMenu />
             <Cart />
            </BrowserRouter> 
        </Provider>
    
      )  
    )

    const accordianHeader = screen.getByText("Pasta (4)");
    fireEvent.click(accordianHeader);

    const accordianBodyItems  = screen.getAllByTestId("foodItems");
    expect(accordianBodyItems.length).toBe(4) ;

    const accordianBodyBtn = screen.getAllByRole("button" , {name : "Add+"});
    expect(accordianBodyBtn[0]).toBeInTheDocument();

    fireEvent.click(accordianBodyBtn[0]);
    
    const cart = screen.getByText("Cart(1)");
    expect(cart).toBeInTheDocument();
   
    fireEvent.click(accordianBodyBtn[1]);

    expect(screen.getByText("Cart(2)")).toBeInTheDocument();

    const cartItem = screen.getAllByTestId("foodItems");
    expect(cartItem.length).toBe(6)


}) ;


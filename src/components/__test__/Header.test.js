import Header from "../Header";
import { fireEvent, render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should render Header Component with a login button " , () =>{

    render(
        <Provider store={appStore}>
         <BrowserRouter>
            <Header/>
         </BrowserRouter>
        </Provider>
    )

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument() 
}) 

it("should render Header Component with a cart(0)" , () =>{

    render(
        <Provider store={appStore}>
         <BrowserRouter>
            <Header/>
         </BrowserRouter>
        </Provider>
    )

    const cart = screen.getByText("Cart(0)");

    expect(cart).toBeInTheDocument() 
});

it("should render Header Component with a cart item" , () =>{

    render(
        <Provider store={appStore}>
         <BrowserRouter>
            <Header/>
         </BrowserRouter>
        </Provider>
    )

    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument() 
})

it("should change login button to logout on Click" , () =>{
    render(
        <Provider store={appStore}>
         <BrowserRouter>
            <Header/>
         </BrowserRouter>
        </Provider>
    )

    const loginButton = screen.getByRole("button" , {name:"Login"});
    expect(loginButton).toBeInTheDocument()

    fireEvent.click(loginButton);

    const LogoutButton = screen.getByRole("button" , {name:"Logout"});
    expect(LogoutButton).toBeInTheDocument()

})
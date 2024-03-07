import { act } from "react-test-renderer"
import Body from "../Body"
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mockData/BodyMockData.json"
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";

global.fetch = jest.fn( () => {
        return Promise.resolve({
            json : () =>{
                return Promise.resolve(MOCK_DATA)
            }
        })
})

it("Should update username with input text Sky" , async() => {
      await act(async () => 
        render(
            <Provider store={appStore}> 
                <BrowserRouter>
                <Header/>
                 <Body/>
               
               </BrowserRouter>
            </Provider>   
        ) 
      )
    
      
}) 
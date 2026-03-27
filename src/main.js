import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/utils/Card";
import { Provider } from "react-redux";
import stores from "./components/store";
function App() {
    return (
        <>
           <Provider store={stores}>
            <Header/>
            <Card />
            </Provider>
        </>
    );
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
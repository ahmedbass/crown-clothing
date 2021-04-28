import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { Homepage } from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE 👒</h1>
    </div>
);

const ShoesPage = () => (
    <div>
        <h1>SHOES PAGE 👞</h1>
    </div>
);

const JacketsPage = () => (
    <div>
        <h1>JACKETS PAGE 🧥</h1>
    </div>
);

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/shop" component={Shop} />
                <Route path="/shop/hats" component={HatsPage} />
                <Route path="/shop/sneakers" component={ShoesPage} />
                <Route path="/shop/jackets" component={JacketsPage} />
            </Switch>
        </div>
    );
}

export default App;

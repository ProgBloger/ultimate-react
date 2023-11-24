import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    const style = {};
    return (
        <header className="header">
            <h1 style={style} className="header">
                Fast React Pizza Co.
            </h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    const pizzaList = 
        <ul className="pizzas">
            {pizzaData.map(pizza => 
                <Pizza 
                    key={pizza.name} 
                    pizzaObj={pizza}
                    />
                )}
        </ul>;

    const emptyMessage = <p>We're still working on our menu. Please come back later :)</p>

    return (
        <main className="menu">
            <h2>Our menu</h2>

            { numPizzas > 0 
                ? pizzaList
                : emptyMessage
            }
        </main>
    );
}

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 3}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    const openMessage = 
        <div className="order">
            <p>
                We're open untill {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>;

    const closedMessage = 
        <div>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </div>;

    return (
        <footer className="footer">
            { isOpen 
                ? openMessage
                : closedMessage
            }
        </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data';

const pizzaApiData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function Header() {}
function Menu(props) {
  return (
    <div className="col-6">
      <div className="row">
        <img src={props.obj.photoName} alt="pizza pics" className="col-6" />
        <div className="col-6">
          <h2 className="">{props.obj.name}</h2>
          <p className="">{props.obj.ingredients}</p>
          <p>{props.obj.price}</p>
        </div>
      </div>
    </div>
  );
}
function Footer() {}

// Rendering all other components and display it to the user
function App() {
  return (
    <div className="row ">
      <Header />
      {pizzaData.map(data => (
        <Menu obj={data} key={data.name} />
      ))}

      <Footer />
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));

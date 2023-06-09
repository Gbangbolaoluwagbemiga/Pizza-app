import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data';

function Header() {
  return (
    <header className="header text-uppercase text-center">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu(props) {
  return (
    <div className="col-md-6">
      <div className="row my-4 ">
        <img src={props.obj.photoName} alt="pizza pics" className="col-6" />
        <div className="col-6 my-md-auto">
          <h3 className="">{props.obj.name}</h3>
          <p className="">{props.obj.ingredients}</p>
          <span>{props.obj.soldOut ? 'SOLD OUT' : props.obj.price}</span>
        </div>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer text-center fw-bold h2 mt-5">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
function Order({closeHour, openHour}) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// Rendering all other components and display it to the user
function App() {
  return (
    <div className="container row mx-auto w-75">
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

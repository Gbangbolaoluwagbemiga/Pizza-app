import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data';

// This is the pizza component
function Pizza({propsObj}) {
  return (
    <div className="col-md-6">
      <div className={`row my-4 pizza ${propsObj.soldOut ? 'sold-out' : ''} `}>
        <img src={propsObj.photoName} alt="pizza pics" className="col-6" />
        <div className="col-6 my-md-auto">
          <h3>{propsObj.name}</h3>
          <p className="w-50 fw-italics">{propsObj.ingredients}</p>
          <span className="mt-4">
            {propsObj.soldOut ? 'SOLD OUT' : propsObj.price}
          </span>
        </div>
      </div>
    </div>
  );
}

// The ordering hour component
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

function Header() {
  return (
    <header className="header text-uppercase text-center">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu row mx-auto w-75">
      <h2 className="my-5 text-center mx-auto w-50">Our menu</h2>

      <>
        <p className="fs-3 text-center">
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        {/* calling the pizza component */}
        {pizzaData.map(data => (
          <Pizza propsObj={data} key={data.name} />
        ))}
      </>
    </main>
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

// Rendering all other components and display it to the user
function App() {
  return (
    <div className="container ">
      <Header />
      <Menu />
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

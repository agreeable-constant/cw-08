import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';
import './App.css';

const produce =
[
 {name: "Apple", type: "Fruit"},
 {name: "Pineapple", type: "Fruit"} ,
 {name: "Banana", type: "Fruit"},
 {name: "Pear", type: "Fruit"},
 {name: "Strawberry", type: "Fruit"},
 {name: "Orange", type: "Fruit"},
 {name: "Lettuce", type: "Vegetable"},
 {name: "Cucumber", type: "Vegetable"},
 {name: "Eggplant", type: "Vegetable"},
 {name: "Squash", type: "Vegetable"},
 {name: "Bell pepper", type: "Vegetable"},
 {name: "Onion", type: "Vegetable"},
]; 

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/counter" className="nav-link">
              Counter
            </Link>
          </li>
          <li>
            <Link to="/filter" className="nav-link">
              Filter
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" exact element={<HelloWorld name={'tom'} />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/filter" element={<FilteredList items={produce} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

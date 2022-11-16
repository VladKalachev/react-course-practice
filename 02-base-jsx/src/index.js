import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Book = ({name, year, price}) => {
  return <div>
    <h2>{name}</h2>
    <p>{year}</p>
    <p>{price}</p>
  </div>
}
const App = () => {
  return (
    <div>
      <h1>Hello Wordl!!</h1>
      <Book name={'JS for beginners'} year={2018} price={1000}/>
      <Book name={'React'} year={2019} price={3000}/>
      <Book name={'Vue'} year={2020} price={2000}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

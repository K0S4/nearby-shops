import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import ShopsList from './components/ShopsList/ShopsList';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <ShopsList/>
    </div>
  );
}

export default App;

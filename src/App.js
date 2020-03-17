import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import ShopsList from './components/ShopsList/ShopsList';

import {useShopsData} from "./hooks/useShopsData/useShopsData";

function App() {
 const shops = useShopsData();

  return (
    <div className="App">
      <PageHeader/>
      <ShopsList/>
    </div>
  );
}

export default App;

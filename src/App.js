import React ,{useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/country/country';
import Cart from './components/country/Cart/cart';

function App(){
 const [countries,setCountries]= useState([]);
 const [cart,setCart]=useState([]);
useEffect(() => {
 fetch('https://restcountries.eu/rest/v2/all')
 .then (res=> res.json())
 .then(data=>{
  setCountries(data);
  //console.log(data);
  //const names=data.map(country =>country.name);
  //console.log(names);
 })
 
},[])

const handleAddCountry=(country)=>{
  const newCart =[...cart,country];
  setCart(newCart);
}

  return (
    <div className="App">
      <h1>Country Loaded:{countries.length}</h1>
      <h4>Country Added:{cart.length}</h4>
      <Cart cart={cart}></Cart>

      <ul>
  {
    countries.map(country=><Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>) 
  }
      </ul>
     
       </div>
  );
}

export default App;

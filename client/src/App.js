import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import Customers  from './components/customers/customers';


function App() {
  const [customers,setCustomers] = useState([])

  useEffect(()=>{
     const fetchData = async()=>{
       const response = await fetch('/api/customers')
       const newcustomers = await response.json()
       console.log(newcustomers)
       setCustomers(newcustomers)
     }
     fetchData()

  },[])

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Customers customers ={customers}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

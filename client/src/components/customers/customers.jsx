
import './customers.css';

function Customers(customers) {
   
  return (
    <div >
      <h3>Customers</h3>
      <ul>
           {customers.map((customer)=>{
               return (
                   <h2>yohh</h2>
               )
           })}
      </ul>
    </div>
  );
}

export default Customers;

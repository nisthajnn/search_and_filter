import './App.css'
import Mockdata from "./assets/MOCK_DATA.json";
import { useState } from 'react';
function App() {
 const[search,setSearch]=useState('');

  return (
    <>
    <div className="sa">
    <div className="inn">
      <input type="text" placeholder='search...' value={search} onChange={e=>setSearch(e.target.value)}/>
      </div>
      {
      Mockdata.filter((val)=>{
      if(search==="")
      {return val}
      else if(val.first_name.toLowerCase().includes(search.toLowerCase())){return val}}).map((val,key)=>
      {
         return <div className='data'key={key}>{val.first_name}</div>
      }
      )
  }
  </div>
    </>
  )
}

export default App

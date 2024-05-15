import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CoditionalRendering from './Components/CoditionalRendering';


const App = () => {
  const data = [
    {id:1,item:"Fancy Item",rate:"$20.00"},
    {id:2,item:"Special Item",rate:"$18.00"},
    {id:3,item:"Special Item",rate:"$19.00"},
    {id:4,item:"Popular Item",rate:"$18.00"},
    {id:5,item:"Sale Item",rate:"$21.00"},
    {id:6,item:"Special Item",rate:"$22.00"},
    {id:7,item:"Fancy Item",rate:"$16.00"},
    {id:8,item:"Special Item",rate:"$16.00"},
    
  ];
  const [product,setProduct]=useState(data)
  const [value, setValue]=useState(0);
  return (
    <>
    <Navbar value={value}/>
    <Header />
    <CoditionalRendering setValue={setValue} value={value} setProduct={setProduct} product={product} />
    <Footer />
    </>
  );
};

export default App;
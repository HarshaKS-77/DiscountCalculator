
import { useRef, useState } from 'react';
import './App.css'
import {  Label, TextInput  } from "flowbite-react";


function App() {
  const price = useRef();
  const disc = useRef();
  const [Discount,setDescount] = useState()
  const [Price,setPrice] = useState()

  const calculateDiscount = () =>{
    console.log(price.current.value);
    console.log(disc.current.value);
    const discountPrice = price.current.value * (disc.current.value / 100)
    const afterDiscount = price.current.value - discountPrice
    console.log(discountPrice,afterDiscount);
    setDescount(discountPrice)
    setPrice(afterDiscount) 
   
  }

  return (
    <>
      <div className='flex justify-center my-40'>
        <div id='box' className="flex max-w-md flex-col gap-4 rounded-xl">
          <h1 className='text-center text-green-200 text-3xl pb-4'>Discount Calculator</h1>
          <div>
            <div className="mb-2 block text-3xl">
              <Label htmlFor="" className='text-4xl' color="success">
                ₹
              </Label>
            </div>
            <TextInput  id="" placeholder="Enter Price" color="success" ref={price} />
          </div>
          <div>
            <div className="mb-2 block text-3xl">
              <Label htmlFor="" className='text-4xl' color="success">
                %
              </Label>
            </div>
            <TextInput id="" placeholder="Enter Discount" color="success" ref={disc} />
          </div>
          <div>
            <div className="my-5 block text-xl text-center">
            <button onClick={calculateDiscount} className='text-gray-100 bg-gray-900 border-2 border-green-800 p-3 rounded-xl hover:bg-green-900'> Calculate</button>
            </div>
          </div>
          <div>
            <div className="mb-2 block text-3xl">
              <Label htmlFor="" className='text-2xl' color="success">
                Save : {Discount}
              </Label>
            </div>
          </div>
          <div>
            <div className="mb-2 block text-3xl">
              <Label htmlFor="" className='text-2xl' color="success">
                Price After Discount : {Price}
              </Label>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App

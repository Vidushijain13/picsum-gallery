import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './compontents/Card'

const App = () => {


  const [userData,setUserData] = useState([])

  const [index,setIndex] = useState(1)

  const getData = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData (response.data);
  }
  useEffect(function(){
    getData( )
  },[index])


  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 font-semibold -translate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black min-h-screen text-white p-8'>
      <h1 className='text-3xl flex justify-center mt-0 items-center font-bold font-serif'>Explore Photos</h1>
        <div className='grid grid-cols-6 gap-4 mb-8'>
          {printUserData}
        </div>

        <div className='flex justify-center gap-6 items-center py-0'>
          <button 
          className='bg-amber-300 cursor-pointer rounded active:scale-95 text-sm text-black px-4 
          py-2 font-semibold hover:bg-amber-400 transition-colors'
          onClick={() =>{
            
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }

          }}
          >
            Prev</button>
            <h4 className='text-sm font-semibold'>Page {index}</h4>
          <button 
          className='bg-amber-300 cursor-pointer active:scale-95 rounded text-sm text-black px-4 
          py-2 font-semibold hover:bg-amber-400 transition-colors'
          onClick={() =>{

            setUserData([])

            setIndex(index+1)

          }}
          >
             Next
          </button>
        </div>
    </div>
  )
}

export default App
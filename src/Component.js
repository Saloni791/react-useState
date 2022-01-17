import React, {useState,useEffect} from 'react';

export default function Component(){
  const [count, setCount] = useState(0);

// console.log("render");

// v1
useEffect(()=>{
  console.log('render');
})

// v2
useEffect(()=>{
  // you will do your side effect here
  console.log('runs only once after first render');
}, [])

// v3
useEffect(()=>{
  // you will do your side effect here
  console.log('runs when dependency array state changes');
}, [count])


// v4
useEffect(()=>{
  return ()=>{
    console.log('unmount');
  }
}, [])
return(
  <div>
    <button onClick={()=> setCount(count-1)}>-</button>
    {count}
    <button onClick={()=> setCount(count+1)}>+</button>
  </div>
    
)
}
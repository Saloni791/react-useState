import React, {useState} from "react";
import Component from './Component';

export default function App() {
  const [flag, setFlag] = useState(true);
  return (
   <>
   <button onClick={()=> setFlag(!flag)}>Switch</button>
   {flag && <Component />}
   </>
  );
}

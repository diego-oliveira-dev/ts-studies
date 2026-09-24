import { useState, useEffect } from "react";
import { Display } from "./components/Display";

export default function App() {
  const [count, setCount] = useState(0);
  // const [x, setX] = useState(y)
  // useState returns an array of two elements: 
  // - the first one is the variable itself with the initial value y
  // - the second one is a function to change the value of the variable
  // we use [x, setX] to destructure this array into two variables

  useEffect(() => {
    document.title = `${count} curtidas`
  }, [count])
  // useEffect(fn, dependencies)
  // useEffect executes a given function or setup based on given conditions
  // these conditions are determined by the second parameter: an array of dependencies
  // there are three general cases:
  // - useEffect(fn): the function is called after EVERY render (avoid in almost all cases)
  // - useEffect(fn, []): the function is called after the initial component loading
  // - useEffect(fn, [x, y...]): the function is called after the elements inside the array change,
  //   you can put any number of elements inside the dependencies array

  return (
    <div>
      <h1>Likes counter</h1>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>Like</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
};
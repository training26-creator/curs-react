import { useState } from "react";

// // 1. important
// // tot ce incepe cu useNumeleFunctie, este numit hook in React

export function State() {

    // const [primul, alDoilea, alTreilea, ] = [0, 1, 2, 3]

    // console.log(primul, alDoilea, alTreilea)

    // Varianta 1
    let value1 = 0;

    function setValue1(val) {
        value1 = val;
    }

    // Varianta 2
  const [value, setValue] = useState([]);

  function handleClick() {
    // console.log(value.count)
    // let currentValue = 
    setValue(value.count + 1);
  }

  console.log(value, 'value')

  return (
    <div>
      <hr />
      <button onClick={handleClick}>Clicked: {value.count}</button>
    </div>
  );
}
// export function Test() {
//   let value = 0;

//   function handleClick() {
//     value = value + 1;
//   }

//   return (
//       <button onClick={handleClick}>Click</button>
//   );
// }

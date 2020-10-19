import React, { useState } from 'react';
import './App.css';
import Todoelements from './todoli'

function App() {
  let [input, setinput] = useState("")
  let [btn, setbtn] = useState([]) // initially btn will be an empty array(b/c there will be no todo)

  const settodobtn = () => {
    setbtn((event) => {
      return [...btn, input] // here we have used es6. which means btn is empty at start after that we will input array values to btn array as it get incremented.this method is used in es6 whichm eans second array will be incremented in first array
      //so as many times value is entered and btn is clicked input will get new value and it will add that value to btn array.
    });
    setinput(''); // so that after enetering value the input should be clean and ready tot ake new input
  }

  const getValue = (e) => {
    console.log(e.target.value) //this line is simply getting value of user input in input box
    return setinput(e.target.value);//this line is setting this value to setinput. which will change automaticly the value of input variable
  }
  // const deleteItems = () => {
  //   console.log("deleeteddddd")
  // }
  const deleteItems = (id) => {
    setbtn((event) => {
      return event.filter((item, index) => {
        return index !== id // if this id equal to index of original array then dont show . else if this is not equal to orgnal list array items show them all.
      })
    })
  }

  return (
    <div className="App">
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>
            Todo App Using React
        </h1>
          <br />
          <input value={input} type="text" placeholder="enter todo item" onChange={getValue}></input>
          <button onClick={settodobtn}>+</button>
          <br />
          <ol>
            {/* <li>{input}</li> it will display the value writen in input box withut clicking insert buttomn*/}
            {btn.map((data, index) => {
              /*return <li key={index}>{data}</li> this could be domne here, but react is componenet based so making it in sprt component*/
              return <Todoelements key={index}
                id={index}
                todoitem={data} //here we are passing the same as prop so that we can use it in child component
                onSelect={deleteItems}
              />
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;

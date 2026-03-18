import { useState } from "react"

function Home(){
    // let meroNumber = 0
    // function increaseMeroNumber(){
    //     meroNumber = meroNumber + 1
    //     console.log(meroNumber)
    // }
    // function decreaseMeroNumber(){
    //     meroNumber = meroNumber - 1 
    // }


const [age, setAge] = useState(1000)


    // console.log(useState(10))
// let something = useState(100)
// let myValue = something[0]
// let myFunction = something[1]


function increaseMyValue(){
    setAge(age + 1)

}

function decreaseMyValue(){
    setAge(age - 1)
}


    return (
       <div>
        <h1> {age}</h1>
        <button onClick={increaseMeroNumber}>+</button>
<button onClick={decreaseMeroNumber}>-</button>


       {/* <h1>my value is : {myValue}</h1>
       <button onClickCapture={increaseMyValue}>+</button>
       <button onClick={decreaseMyValue}>-</button> */}
       </div> 
    )
}

export default Home 



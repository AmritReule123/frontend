import { useEffect } from "react";

function LearningUseEffect() {

//   useEffect(() => {
//     console.log("Page Loaded ✅");
//   }, []);




//type 2 of useEffect hook
const [number, setNumber] = useState(0)
function increaseNumber(){
    setNumber(number + 1)
}
useEffect(()=>{
console.log("this is a second hook in react js")
}, [number])

  return (
    <div>
      <h1>I am learning useEffect hook today</h1>
      <h3>{number}</h3>
      <button onClick={increaseNumber}>+</button>
    </div>
  );
}

export default LearningUseEffect;
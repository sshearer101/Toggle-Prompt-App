import './App.css';
import {useState} from "react"

function App() {

const data = [
  {question: "What is your return policy?",
  answer: "dfnjdsnfjkd"},

  {question: "How do I track my order?",
  answer: "dfnjdsnfjkd"},

  {question: "Can I purchase items again?",
  answer: "dfnjdsnfjkd"}
]

const [selected, setSelected] = useState()

function toggle(i){
if (selected === i){
  return setSelected(null)
}
setSelected(i)
}


return(
<div>
  {data.map((item, i) => 
    <div>
    <div onClick={() => toggle(i)}>
      <h1>{item.question}</h1>
      <span>{selected === i ? "-" : "+"}</span>
      </div>
      <div className ={selected === i ? "content-show" : "content-hide"}>
        {item.answer}
      </div>
    </div>
  )}

</div>


)














// const [selected, setSelected] = useState()

// function toggle(i){
//   if(selected === i){
//     return setSelected(null)
//   }
//   setSelected(i)
// }

// return(
//   <div>
//     <div>
//     {data.map((item, i) => 
//       <div>
//         <div onClick={() => toggle(i)}>
//          <h1>{item.question}</h1>
//           <span>{selected === i ? '-' : '+'}</span>
//         </div>
//         <div className={selected === i ? "content-show" : "content-hide"}>
//           {item.answer}
//         </div>
//       </div>
//     )}
//     </div>
//   </div>
// )

}
export default App;

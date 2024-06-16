// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import BaseRoute from "./apps/BaseRoute";
// import LayoutInit from "./components/LayoutInit";

// function App({ basename }) {
//   return (
//     <BrowserRouter>
//       <LayoutInit>
//         <BaseRoute />
//       </LayoutInit>
//     </BrowserRouter>
//   );
// }

// export default App;



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import BaseRoute from "./apps/BaseRoute";
import LayoutInit from "./components/LayoutInit";
import Sentiment from 'sentiment';

function App() {
  const sentiment = new Sentiment();
  const teks = "Saya sangat senang hari ini!";
  const hasilAnalisis = sentiment.analyze(teks);
  console.log("Teks:", teks);
  console.log("Skor:", hasilAnalisis.score);
  console.log("Klasifikasi:", hasilAnalisis.score > 0 ? "Positif" :
  hasilAnalisis.score < 0 ? "Negatif" : "Netral");
  
  return (
    <BrowserRouter>
      <BaseRoute />
    </BrowserRouter>
  );
}

export default App;
// function App() {
//   const createSessionStorage = () => {
//     sessionStorage.setItem('token', '12345');
//     alert('Success');
//   };
  
//   const removeSessionStorage = () => {
//     sessionStorage.removeItem('token', '12345');
//     alert('Success');
//   };
  

//   return (
//     <>
//     <button onClick={createSessionStorage}>Set token sessionStorage</button>
//     <div>{sessionStorage.getItem('token')}</div>
//     <button onClick={removeSessionStorage}>remove token SessionStorage</button>
//     </>

    // <BrowserRouter>
    // <LayoutInit>
    //   <BaseRoute>
    //   </BaseRoute>
    // </LayoutInit>
    // </BrowserRouter>

  //   <div>
  //   {/* <h1>Hello World</h1> */}
  //  {/* <HelloWorld/>
  //  <Expression/>
  //  <Attributes/> */}
  //  {/* <MyProfile/> */}
  //  <Profile/>
  //   </div>
//   );
// }

// export default App;
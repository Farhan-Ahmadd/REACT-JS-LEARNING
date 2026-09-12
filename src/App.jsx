import React from "react";
import image from "./assets/image.png";

// export const App = () => {
//   return (
//     <div>
//       <h1>Netflix Series</h1>

//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </div>
//   );
// };

// const NetflixSeries = () => {
//   return (
//     <div>
//       <img src={image} height="200px" width="200px" />

//       <h2>Money Heist</h2>
//       <h2>Rating: 4.5/5</h2>

//       <p>
//         Money Heist is a Spanish heist crime drama television series created
//         by Álex Pina. The series traces two long-prepared heists led by
//         the Professor (Álvaro Morte).
//       </p>
//     </div>
//   );
// };
// export const App = () =>{
//   return(
//     <div>
//       <h1>Netflix Series</h1>
//       <NetflixSeries 
//        name="Money Heist"
//        rating="4.5/5" 
//        description="Money Heist is a Spanish heist crime drama television series created by Álex Pina. The series traces
//         two long-prepared heists led by the Professor (Álvaro Morte)."
//        />
//        <NetflixSeries 
//        name="Stranger Things"
//        rating="4.8/5"
//        description="Stranger Things is an American science fiction horror television series created by the Duffer Brothers."
//        />
//        <NetflixSeries
//        name= "Breaking Bad"
//        rating="4.9/5"
//         description="Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan."
//        />
//     </div>
//   )
// }
// const NetflixSeries = (props)=>{
//   return(
//     <div>
//       <img src ={image} height="200px" width="200px" />
//       <h2>{props.name}</h2>
//       <h2>Rating:{props.rating}</h2>
//       <p>{props.description}</p>
//     </div>
//   )
// }
// export const App = ()=>{
//   return(
//     <div>
//       <h1> the Series</h1>
//       <NetMirror
//       name = "dont forget me"
//       rating = "4.5/5"
//       description= "dont forget me is a Spanish heist crime drama " 
//       />
//       <NetMirror 
//       name = " belive me"
//       rating = "4.8/5"
//       description="belive me is an American science fiction horror"/>
//     </div>
//   )
// }
// const NetMirror = (props)=>{
//   return(
//     <div>
//       <img src ={image} height="200px" width="200px" />
//       <h2>{props.name}</h2>
//       <h3>Ratings:{props.rating}</h3>
//       <p>{props.description}</p>

//     </div>
//   )
// }
// export const App =()=>{
//   return(
//     <div>
//       <h1>MY NAME IS FARHAN KHAN</h1>
//       <TaskController
//          TaskName = "Learn React"
//          TaskDescription = "Learn React is a JavaScript library for building user interfaces."
//          TaskStatus = "In Progress"
//       />
//       <TaskController
//          TaskName = "Learn MERN Stack"
//          TaskDescription = "Learn MERN Stack is a JavaScript library for building user interfaces."
//          TaskStatus = "In Progress"
//       />
//       <TaskController
//          TaskName = "Learn css"
//          TaskDescription = "Learn css is a stylesheet language for building user interfaces."
//          TaskStatus = "In Progress"
//       />
//     </div>
//   )
// }
// const TaskController = (props)=>{
//   return(
//     <div>
//       <h2>{props.TaskName}</h2>
//       <h3>{props.TaskDescription}</h3>
//       <p>{props.TaskStatus}</p>
//     </div>
//   )
// }
export const App = ()=>{
  return(
    <div>
      <h1>MY NAME IS FARHAN KHAN</h1>
      <AppController
        AppName="Netflix"
        AppDescription="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
        AppStatus="Available"
      />
      <AppController
        AppName="Amazon Prime Video"
        AppDescription="Amazon Prime Video is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
        AppStatus="Available"
      />
      <AppController
        AppName="Disney+"
        AppDescription="Disney+ is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
        AppStatus="Available"
      />
    </div>
  )
}
const AppController = (props)=>{
  return(
    <div>
      <h2>{props.AppName}</h2>
      <h3>{props.AppDescription}</h3>
      <p>{props.AppStatus}</p>
    </div>
  )
}
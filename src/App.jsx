// import NetflixSeries from "./components/NetflixSeires.jsx";
// export const App = () => {
//   return (
//     <div>
//       <h1>Netflix Series</h1>
//       <NetflixSeries />
//     </div>
//   );
// };

import Profile from "./components/profile.jsx";

export const App = () => {
  return (
    <div>
      <Profile
        name="John Doe"
        age={30}
        occupation="Software Engineer"
        greeting={
          <div>
            <strong>Hello, John!</strong>
          </div>
        }
      >
        <p>Hobbies: reading, swimming</p>
        <button>Contact</button>
      </Profile>
    </div>
  );
};
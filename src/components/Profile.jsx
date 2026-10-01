const Profile = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>

      <h2>Age: {props.age}</h2>

      <div>
        Occupation: {props.occupation}
      </div>

      <div>
        Greeting: {props.greeting}
      </div>

      {props.children}
    </>
  );
};

export default Profile;
import image from "../assets/image.png";

 const Net = () => {
  const name = "Money Heist";
  const rating = "4.5/5";

  return (
    <div>
      <img src={image} height="200px" width="200px" />

      <h2>Name: {name}</h2>
      <h2>Rating: {rating}</h2>

      <p>
        Money Heist is a Spanish heist crime drama television series created
        by Álex Pina.
      </p>
    </div>
  );
};

export default Net;
export const Footer =()=>{
    return(
        <div>
            <h1> helllo </h1>
        </div>
    )
}

export const Pro = ()=>{
    return (
        <>
        <h3>jnnjjnkn</h3>
        </>
    )
}
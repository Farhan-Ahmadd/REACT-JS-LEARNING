export const SeriesCard = (props) => {
  return (
    <li>
      <div>
        <img
          src={props.curElem.imag_url}
          alt={props.curElem.name}
          style={{
            width: "300px",
            height: "400px",
            objectFit: "cover",
          }}
        />

        <h2>Name: {props.curElem.name}</h2>

        <h2>Rating: {props.curElem.rating}</h2>

        <p>Description: {props.curElem.description}</p>

        <p>Genre: {props.curElem.genre.join(", ")}</p>

        <a href={props.curElem.watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
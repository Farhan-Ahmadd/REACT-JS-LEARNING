export const SeriesCard = ({data}) => {
  const {  imag_url , name , rating , description , genre , watch_url}=data;
  return (
    <li>
      <div>
        <img
          src={imag_url}
          alt={name}
          style={{
            width: "300px",
            height: "400px",
            objectFit: "cover",
          }}
        />

        <h2>Name: {name}</h2>

        <h2>Rating: {rating}</h2>

        <p>Description: {description}</p>

        <p>Genre: {genre.join(", ")}</p>

        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
import seriesData from "../api/serisData.json";

const NetflixSeries = () => {
  return (
    <ul>
      <li>
    <div>
      <img src={seriesData[0].imag_url }/>

      <h2>Name: {seriesData[0].name}</h2>

      <h2>Rating: {seriesData[0].rating}</h2>

      <p>Description: {seriesData[0].description}</p>

      <p>Genre: {seriesData[0].genre.join(", ")}</p>

      <a href={seriesData[0].watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </div>
    </li>
      <li>
    <div>
      <img src={seriesData[1].imag_url }width="40%" />

      <h2>Name: {seriesData[1].name}</h2>

      <h2>Rating: {seriesData[1].rating}</h2>

      <p>Description: {seriesData[1].description}</p>

      <p>Genre: {seriesData[1].genre.join(", ")}</p>

      <a href={seriesData[1].watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </div>
    </li>
      <li>
    <div>
      <img src={seriesData[2].imag_url }width="40%"/>

      <h2>Name: {seriesData[2].name}</h2>

      <h2>Rating: {seriesData[2].rating}</h2>

      <p>Description: {seriesData[2].description}</p>

      <p>Genre: {seriesData[2].genre.join(", ")}</p>

      <a href={seriesData[2].watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </div>
    </li>
    </ul>
  );
};

export default NetflixSeries;
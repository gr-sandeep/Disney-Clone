import { MoviesList } from "../config/MoviesList";
import { Link } from "react-router-dom";

const NewDisney = () => {
  const newlyAdded = MoviesList.filter((movie) => movie.type == "new");

  return (
    <div>
      <h1 className="text-xl font-semibold">Newly Added</h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-2">
        {newlyAdded.map((movie) => (
          <div className="viewer">
            <Link  key={movie.id}
              to={
                "/details/" +
                movie.title.toLowerCase().replace(" ", "-") +
                "/" +
                movie.id
              }
            >
              <img
                src={movie.cardImg}
                width={300}
                height={300}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default NewDisney;

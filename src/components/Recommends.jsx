import { Link } from "react-router-dom";
import { MoviesList } from "../config/MoviesList";

const Recommends = () => {
  const recommended = MoviesList.filter((movie) => movie.type == "recommend");
  return (
    <div>
      <h1 className="text-xl font-semibold">Recommended For You</h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-2">
        {recommended.map((movie, index) => (
          <div className="viewer">
            <Link to={"/detail/" + movie.title.toLowerCase().replace(" ", "-")}>
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

export default Recommends;

import { MoviesList } from "../config/MoviesList";

const Originals = () => {
  const originals = MoviesList.filter((movie) => movie.type == "original");
  return (
    <div>
      <h1 className="text-xl font-semibold">Original</h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-2">
        {originals.map((movie) => (
          <div className="viewer">
            <img
              src={movie.cardImg}
              width={300}
              height={300}
              alt={movie.title}
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Originals;

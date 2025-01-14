import React from "react";

const Viewers = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div className="viewer">
        <img
          className="absolute"
          width={300}
          height={300}
          src="/images/viewers-disney.png"
          alt=""
        />
        <video
          playsInline
          autoPlay
          loop
          src="/videos/disney.mp4"
          className="w-full opacity-0 hover:opacity-100 rounded-lg"
        ></video>
      </div>

      <div className="viewer">
        <img
          className="absolute"
          width={300}
          height={300}
          src="/images/viewers-marvel.png"
          alt=""
        />
        <video
          className="w-full opacity-0 hover:opacity-100 rounded-lg"
          playsInline
          autoPlay
          loop
          src="/videos/marvel.mp4"
        ></video>
      </div>

      <div className="viewer">
        <img
          className="absolute"
          width={300}
          height={300}
          src="/images/viewers-national.png"
          alt=""
        />
        <video
          className="w-full opacity-0 hover:opacity-100 rounded-lg"
          playsInline
          autoPlay
          loop
          src="/videos/national-geographic.mp4"
        ></video>
      </div>

      <div className="viewer">
        <img
          className="absolute"
          width={300}
          height={300}
          src="/images/viewers-pixar.png"
          alt=""
        />
        <video
          className="w-full opacity-0 hover:opacity-100 rounded-lg"
          playsInline
          autoPlay
          loop
          src="/videos/pixar.mp4"
        ></video>
      </div>

      <div className="viewer">
        <img
          className="absolute"
          width={300}
          height={300}
          src="/images/viewers-starwars.png"
          alt=""
        />
        <video
          className="w-full opacity-0 hover:opacity-100 rounded-lg"
          playsInline
          autoPlay
          loop
          src="/videos/star-wars.mp4"
        ></video>
      </div>
    </main>
  );
};

export default Viewers;

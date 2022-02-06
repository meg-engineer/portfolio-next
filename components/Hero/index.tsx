const Hero: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url(" + "/main.jpg" + ")",
      }}
    >
      <div className="flex justify-center items-center w-full h-screen">
        <div className="mx-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-widest text-stone-600 md:text-8xl">
            Meg&apos;s Portfolio
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

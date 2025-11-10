
const Banner = () => {
  return (
    <div className="relative w-full h-[150px] sm:h-[150px] md:h-[200px] lg:h-[250px] overflow-hidden px-4 sm:px-10 md:px-20 lg:px-40 bg-white flex items-center justify-center">
      <img
        src="https://i.pinimg.com/1200x/c4/37/2c/c4372c63d4349e122ed1f5613ccd8adb.jpg"
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Optional gradient overlay for contrast */}
    </div>
  );
};

export default Banner;
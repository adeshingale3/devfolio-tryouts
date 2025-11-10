
const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-black/20 py-6 px-6 sm:px-20 md:px-40 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-200">
        {/* Left Side — About Text */}
        <div className="text-sm text-gray-400 text-center sm:text-left montserrat">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Devfolio</span>.  
          Built with ❤️ by Adesh.
        </div>

        {/* Right Side — Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-sky-600 transition-all duration-200 text-gray-400"
          >
            
            ABOUT
          </a>
          <a
            href="#feedback"
            className="flex items-center gap-2 hover:text-sky-600 transition-all duration-200 text-gray-400"
          >
            
            SHARE FEEDBACK
          </a>
          <a
            href="#tag"
            className="flex items-center gap-2 hover:text-sky-600 transition-all duration-200 text-gray-400"
          >
            
            TAG US
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

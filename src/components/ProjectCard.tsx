import { Heart } from "lucide-react";

const ProjectCard = ({ logo, name, description, hackathon }: {
  logo: string;
  name: string;
  description: string;
  hackathon: string;
}) => {
  return (
    <div className="w-full max-w-sm bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col gap-3">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt={name}
            className="w-10 h-10 rounded-md object-cover border border-gray-300"
          />
          <h2 className="text-lg font-semibold text-gray-800 montserrat">{name}</h2>
        </div>

        <button className="text-gray-400 hover:text-red-500 transition-all duration-200">
          <Heart size={20} />
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-snug line-clamp-2">
        {description}
      </p>

      {/* Hackathon Info */}
      <p className="text-xs font-medium text-gray-400 mt-1">
        Built at <span className="text-sky-600">{hackathon}</span>
      </p>
    </div>
  );
};

export default ProjectCard;

import { FolderGit2, Medal, Trophy } from "lucide-react";

const Achievements = () => {
  const cards = [
    {
      id: 1,
      title: "Projects",
      count: 3,
      icon: <FolderGit2 color="orange" />,
      bg: "bg-orange-100",
    },
    {
      id: 2,
      title: "Prizes",
      count: 2,
      icon: <Medal />,
      bg: "bg-orange-200",
    },
    {
      id: 3,
      title: "Hackathons",
      count: 34,
      icon: <Trophy color="black" />,
      bg: "bg-gray-300",
    },
    {
      id: 4,
      title: "Hackathons Org.",
      count: 0,
      icon: <Trophy color="black" />,
      bg: "bg-gray-300",
    },
  ];

  return (
    <div className="px-40 py-8 max-sm:px-4">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        <h1 className="text-lg font-bold text-gray-400 montserrat">
          DEVFOLIO STATS
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-between px-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative bg-gray-100 rounded-xl shadow-sm w-full sm:w-64 h-26 flex flex-col justify-between p-6 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-row items-center gap-3">
                <div
                  className={`w-14 h-14 ${card.bg} flex items-center justify-center rounded-xl shadow-inner`}
                >
                  {card.icon}
                </div>

                <div className="flex flex-col items-start text-sm font-bold">
                  <h2 className="text-lg montserrat text-gray-700 leading-tight">
                    {card.count}
                  </h2>
                  <h2 className="text-sm text-gray-400 montserrat uppercase">
                    {card.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

import { FolderGit2, Medal, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Achievements = () => {
  const [activeCard, setActiveCard] = useState(1);

  // Dummy graph data
  const graphData = Array.from({ length: 7 }, (_, i) => ({
    day: `D${i + 1}`,
    value: Math.floor(Math.random() * 100) + 10,
  }));

  const cards = [
    {
      id: 1,
      title: "Projects",
      count: 3,
      icon: <FolderGit2 color="orange" />,
      bg: "bg-orange-100",
      lineColor: "#f59e0b",
    },
    {
      id: 2,
      title: "Prizes",
      count: 2,
      icon: <Medal />,
      bg: "bg-orange-200",
      lineColor: "#f97316",
    },
    {
      id: 3,
      title: "Hackathons",
      count: 34,
      icon: <Trophy color="black" />,
      bg: "bg-gray-300",
      lineColor: "#3b82f6",
    },
    {
      id: 4,
      title: "Hackathons Org.",
      count: 0,
      icon: <Trophy color="black" />,
      bg: "bg-gray-300",
      lineColor: "#10b981",
    },
  ];

  return (
    <div className="px-40 py-8 max-sm:px-4">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        <h1 className="text-lg font-bold text-gray-400 montserrat">
          DEVFOLIO STATS
        </h1>

        <div className="flex flex-col sm:flex-row gap-5 justify-between px-2">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(1)}
              layout
              transition={{ duration: 0.5, type: "spring" }}
              className={`relative bg-gray-100 rounded-xl shadow-sm transition-all duration-500 overflow-hidden cursor-pointer 
                ${
                  activeCard === card.id
                    ? "w-full sm:w-80"
                    : "w-full sm:w-56"
                } h-44 sm:h-48 flex flex-col justify-between p-5 sm:p-6`}
            >
              {/* Header */}
              <div className="flex flex-row items-center mb-2 gap-2">
                <div
                  className={`w-14 h-14 ${card.bg} flex items-center justify-center rounded-xl shadow-inner`}
                >
                  {card.icon}
                </div>

                <div className="flex flex-col items-start text-sm font-bold ">
                  <h2 className="text-lg montserrat text-gray-700 leading-tight">
                    {card.count}
                  </h2>
                  <h2 className="text-sm text-gray-400 montserrat uppercase text-wrap">
                    {card.title}
                  </h2>
                </div>
              </div>

              {/* Graph */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: activeCard === card.id ? 1 : 0,
                  scaleX: activeCard === card.id ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="origin-left overflow-hidden mt-3"
              >
                {activeCard === card.id && (
                  <div className="h-20 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={graphData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke={card.lineColor}
                          strokeWidth={2.5}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

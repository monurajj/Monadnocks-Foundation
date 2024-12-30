import { FaTree, FaUsers, FaChalkboardTeacher, FaFemale } from "react-icons/fa"; // Importing icons
import { useEffect, useState } from "react";

function ImpactStats() {
  const [stats, setStats] = useState({
    treesPlanted: 1000,
    studentsMentored: 500,
    communityEvents: 20,
    womenEmpowered: 300,
    targetTrees: 5000,
    targetMentored: 2000,
    targetEvents: 100,
    targetWomen: 1500,
  });

  useEffect(() => {
    // Animation effect to show numbers count up (simulating dynamic update)
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        treesPlanted: Math.min(prev.treesPlanted + 10, prev.targetTrees),
        studentsMentored: Math.min(
          prev.studentsMentored + 5,
          prev.targetMentored
        ),
        communityEvents: Math.min(prev.communityEvents + 1, prev.targetEvents),
        womenEmpowered: Math.min(prev.womenEmpowered + 2, prev.targetWomen),
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-green-100/75">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-12">
          Our Impact & Ambitions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-green-900 text-center">
          {/* Stat Cards */}
          <div className="relative p-8 bg-green-500 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="text-5xl font-bold mb-2">{stats.treesPlanted}+</div>
            <div className="text-green-200">Trees Planted</div>
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <FaTree className="w-16 h-16 text-green-100" />
            </div>
          </div>

          <div className="relative p-8 bg-green-500 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="text-5xl font-bold mb-2">
              {stats.studentsMentored}+
            </div>
            <div className="text-green-200">Students Mentored</div>
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <FaChalkboardTeacher className="w-16 h-16 text-green-100" />
            </div>
          </div>

          <div className="relative p-8 bg-green-500 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="text-5xl font-bold mb-2">
              {stats.communityEvents}+
            </div>
            <div className="text-green-200">Community Events</div>
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <FaUsers className="w-16 h-16 text-green-100" />
            </div>
          </div>

          <div className="relative p-8 bg-green-500 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="text-5xl font-bold mb-2">
              {stats.womenEmpowered}+
            </div>
            <div className="text-green-200">Women Empowered</div>
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <FaFemale className="w-16 h-16 text-green-100" />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-green-700 py-12 text-white text-center rounded-lg shadow-xl">
          <h3 className="text-3xl font-semibold mb-6">Our Targets for 2025</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <div className="bg-green-600 p-6 rounded-lg shadow-lg hover:bg-green-500 transition">
              <div className="text-3xl font-bold">{stats.targetTrees}+</div>
              <div className="text-green-200">Trees to be Planted</div>
              <p className="mt-4 text-green-100">
                Together, we will plant 5,000+ trees, contributing to a
                healthier planet.
              </p>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-lg hover:bg-green-500 transition">
              <div className="text-3xl font-bold">{stats.targetMentored}+</div>
              <div className="text-green-200">Students to be Mentored</div>
              <p className="mt-4 text-green-100">
                Aiming to mentor over 2,000 students, empowering the leaders of
                tomorrow.
              </p>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-lg hover:bg-green-500 transition">
              <div className="text-3xl font-bold">{stats.targetEvents}+</div>
              <div className="text-green-200">Community Events to Host</div>
              <p className="mt-4 text-green-100">
                Our goal is to organize 100+ events that bring communities
                together.
              </p>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-lg hover:bg-green-500 transition">
              <div className="text-3xl font-bold">{stats.targetWomen}+</div>
              <div className="text-green-200">Women to be Empowered</div>
              <p className="mt-4 text-green-100">
                By empowering over 1,500 women, we aim to create an equal and
                inclusive world.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold">
              <span className="text-green-200">
                Join Us in Reaching These Milestones
              </span>
            </p>
            <button className="mt-4 px-6 py-3 bg-yellow-500 text-green-800 font-semibold rounded-full hover:bg-yellow-400 transition">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactStats;

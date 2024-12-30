import Image from "next/image";

function OurKeyInitiative() {
  const initiatives = [
    {
      title: "Environmental Conservation",
      description: "100 Trees Plantation Challenge & Green Initiatives",
      impact: "1000+ trees planted",
      image: "/environmental.jpeg", // Move images to public directory
    },
    {
      title: "Education & Youth",
      description: "Skill Development & Career Guidance",
      impact: "500+ students mentored",
      image: "/educationAndYouth.jpeg",
    },
    {
      title: "Sports Program",
      description: "Inclusive Sports & Fitness Activities",
      impact: "20+ sports events",
      image: "/sports.jpg",
    },

    {
      title: "Women Empowerment",
      description: "Leadership & Skill Enhancement",
      impact: "300+ women empowered",
      image: "/Women-Empowerment-in-India.jpg",
    },
    {
      title: "Cultural Programs",
      description: "Street Plays & Community Events",
      impact: "50+ community events",
      image: "/culturalProgrammee.jpeg",
    },
  ];

  console.log("bhais")
  return (
    <section id="initiatives" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Key Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                {/* <div className="bg-blue-50 text-blue-600 py-2 px-4 rounded-full inline-block text-sm">
                  {initiative.impact}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurKeyInitiative;

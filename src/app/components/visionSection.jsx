import {
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// import team image
import monadnocksTeamImg from "../../assets/monadnocksTeam.jpg";
import Image from "next/image";

function VisionSection() {
  return (
    <section id="aboutUs" className="py-20 px-4 bg-gradient-to-r from-blue-100 to-teal-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 transition-transform transform hover:translate-x-2">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
              At Monadnocks Foundation, we believe in creating positive change
              through sustainable community development. Our mission extends
              beyond traditional charity – we focus on empowering individuals
              and communities to build a better tomorrow through innovative
              solutions and active participation.
            </p>
            {/* <button className="flex items-center gap-2 text-blue-600 hover:gap-4 hover:text-blue-800 transition-all ease-in-out duration-300">
              Learn More About Our Mission <ArrowRight className="w-5 h-5" />
            </button> */}
          </div>

          {/* Image Section */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group">
            <Image
              src={monadnocksTeamImg}
              alt="Our Vision"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Users,
} from "react-icons/fa"; // Keep these as they are

import { IoMapPin } from "react-icons/io"; // Correct import for MapPin

function ContactUs() {
  return (
    <section id="contactUs" className="py-20 px-4 bg-gray-50">
      {/* <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Mail className="w-6 h-6 mx-auto mb-4 text-blue-600" />
            <p className="font-semibold">Email</p>
            <p className="text-gray-600">contactmonadnocks@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <IoMapPin className="w-6 h-6 mx-auto mb-4 text-blue-600" />
            <p className="font-semibold">Website</p>
            <p className="text-gray-600">www.Monadnocks.in</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
            <Users className="w-6 h-6 mx-auto mb-4 text-blue-600" />
            <p className="font-semibold">Social Media</p>
            <div className="flex justify-center gap-4 mt-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default ContactUs;

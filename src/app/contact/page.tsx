import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 md:p-8 order-last md:order-first">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 animate-color-change">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below to get in touch with us about your travel
            plans.
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 bg-blue-500 relative h-64 md:h-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full overflow-hidden w-3/4 h-3/4 border-4 border-white">
              <Image
                src="/images/contact.jpeg"
                alt="Travel Blog"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

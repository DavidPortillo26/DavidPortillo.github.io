export default function Hero() {
    return (
      <section className="h-screen bg-gray-900 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl font-extrabold text-white mb-4">David Portillo</h1>
        <p className="text-xl text-gray-400 max-w-xl mb-8">
          Software Engineer & Creative Technologist — Building powerful, sleek web experiences.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
        >
          See My Work
        </a>
      </section>
    );
  }
  
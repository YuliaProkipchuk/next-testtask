export default function HeroSection() {
  return (
    <section className="w-full h-96  flex flex-col items-center justify-center gap-4">
      <div className="p-1 ">
        <h1 className="font-bold uppercase text-4xl">Car Dealer App</h1>
      </div>
      <div className="bg-black bg-opacity-75 p-2 text-center w-1/2">
        <span className="text-white text-xl font-bold ">
          Explore vehicle models from the vPIC database by selecting a specific
          year and car. Easily discover models that match your criteria and dive
          into the details!
        </span>
      </div>
    </section>
  );
}

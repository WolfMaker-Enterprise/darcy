function MobilityFlags() {
  return (
    <section className="bg-white text-[#2D2D2D] py-20 px-6 text-center">
      <h2 className="text-[40px] font-semibold text-[#3A3A3A] tracking-[-0.8px] mb-12">
        Minhas bandeiras por uma mobilidade justa
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
        <img
          src="/image/free.png"
          alt="Livre acesso à Free Way"
          className="w-[297.86px] h-[180.8px]"
          style={{ aspectRatio: "297.86 / 180.8" }}
        />
        <img
          src="/image/free2.png"
          alt="RS118 sem pedágio"
          className="w-[239.06px] h-[239.06px]"
          style={{ aspectRatio: "239.06 / 239.06" }}
        />
      </div>
    </section>
  );
}

export default MobilityFlags;

import ShowCasePhoto from "../../assets/landing_showcase-original.png";
export const MainSection = () => {
  return (
    <section
      className="HomePage bg-baseBlue pb-20"
      style={{ padding: 100 }}
      id="main-section"
    >
      <h2 className="py-4 text-center text-5xl font-bold text-white">
        Build Apps for your Business
      </h2>
      <img src={ShowCasePhoto} alt="" className="" />

      <div className="flex flex-col items-center justify-center">
        <p className="w-1/2 text-center text-xl text-white">
          We are providing many colorful features to your enterprise business.
          You can customize your features depending on your requirements. We are
          here for your service.
        </p>
        <button className="GetStarted mt-8 rounded-full bg-white px-8 py-2 text-lg font-bold text-baseBlue">
          Get Start
        </button>
      </div>
    </section>
  );
};

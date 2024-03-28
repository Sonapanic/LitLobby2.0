const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="h-1/2 w-1/2 p-5 mt-40 flex flex-wrap rounded-md bg-darkCream items-center justify-center"
        style={{
          background:
            "linear-gradient(to bottom left, #E1D4C0, #cdbfa8, #E1D4C0)",
        }}
      >
        <div className="p-2">
          Thanks for visiting Lit-Lobby! The website is currently in a state of
          change, so some features may not be working correctly.
        </div>

        <div className="">
          Books are now sorted into libraries, so until those components are
          created and tested, there will be limited functionality for adding to
          your lobby. This should be finished quite soon, thank you for being
          patient!
        </div>
        <i className="text-lg">-Isaac</i>
      </div>
    </div>
  );
};

export default About;

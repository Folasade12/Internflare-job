// Card Component
const Card = ({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
}) => {
  return (
    <div
      className={`rounded-2xl p-8 bg-[${bgColor}] text center flex flex-col items-center justify-center`}
    >
      <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full text-black-500">
        <img src="/src/assets/images/howItWorksIcon.png" alt={title} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
      <p className="text-gray-500 text-sm text-[#464646]">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="bg-[#f1f1f1] py-[64px] mt-10 px-[6%]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl leading-[auto] tracking-[-4%] font-semibold mb-4 text-center">
          How it works
        </h2>
        {/* Section Description */}
        <p className="text-[#000000] text-[15px] max-w-xl mx-auto my-[32px]">
          A smart matching platform that connects you to job opportunities that
          match your skills and profile
        </p>
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card
            title="Submit Request"
            description="Tell us the role and skills you required, Our system captures all the details to find the right intern for you."
            bgColor="#FFE1D2"
          />
          {/* Card 2 */}
          <Card
            title="Get Matched"
            description="Our system review your request and connect you with suitable interns"
            bgColor="#DDD3CD"
          />
          {/* Card 3 */}
          <Card
            title="Get Connected"
            description="Our system review your request and connect you with suitable interns"
            bgColor="#E1DAFF"
          />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;

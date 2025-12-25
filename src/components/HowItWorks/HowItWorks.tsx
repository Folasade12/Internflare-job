const HowItWorks = () => {
    return (
        <section className="bg-gray-50 py-20 mt-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-semibold mb-4 text-center">How it works</h2>
                {/* Section Description */}
                <p className="text-black font-semibold max-w-xl mx-auto mb-12">
                    A smart matching platform that connects you to job opportunities that match your skills and profile
                </p>
                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="rounded-2xl p-8 bg-[#FFE1D2] text center flex flex-col items-center justify-center">
                        <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full text-black-500">
                            <img src="/src/assets/images/icon2.png" alt="icon2" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-black">Submit Request</h3>
                        <p className="text-gray-500 text-sm text-[#464646]">
                            Tell us the role and skills you required, Our system captures all the details to find the right intern for you.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-2xl p-8 bg-[#DDD3CD] text-white text-center flex flex-col items-center justify-center">
                        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full text-black-500">
                            <img src="/src/assets/images/icon1.png" alt="icon1" />
                        </div>
                        <h3 className="text-xl font-semibold mb-5 text-black">Get Matched</h3>
                        <p className="text-gray-500 text-sm text-[#464646]">
                            Tell us the role and skills you required, Our system captures all the details to find the right intern for you.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-2xl p-8 bg-[#E1DAFF] text-white text-center flex flex-col items-center justify-center">
                        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full text-black-500">
                            <img src="/src/assets/images/icon1.png" alt="icon1" />
                        </div>
                        <h3 className="text-xl font-semibold mb-5 text-black">Get Connected</h3>
                        <p className="text-gray-500 text-sm text-[#464646]">
                            Our system review your request and connect you with suitable interns
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HowItWorks;
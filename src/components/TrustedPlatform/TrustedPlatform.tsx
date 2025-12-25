const TrustedPLatform = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Card Wrapper */}
                <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        {/* Left: Image */}
                        <div className="w-full lg:w-[45%] flex justify-center">
                            <img 
                            src="/src/assets/images/image 119.png" 
                            alt="man holding a laptop" 
                            className="w-full max-w-md h-auto"
                            />
                        </div>
                        {/* Right: Content */}
                        <div className="w-full lg:w-[55%]">
                            <h2 className="text-3xl font-semibold mb-4">
                                Trusted platform anytime and anywhere
                            </h2>
                            <p className="text-gry-500 mb-6">
                                Access a pool of certified, job-ready interns trained with real skills to support your business. Post roles, review profiles and hire with confidence- all in one simple platform.
                            </p>
                            {/* TrustPilot + Stats */}
                            <div className="flex items-center gap-10 mb-4">
                                {/* TrustPilot */}
                                <div>
                                    <p className="text-green-600 font-semibold">★Trustpilot</p>
                                    <div className= "flex gap-1 mt-1">
                                        {[...Array(5) ].map((_, index) => (
                                         <span
                                         key={index}
                                         className="w-4 h-4 bg-green-600 text-white flex items-center justify-center text-xs rounded sm"
                                        >
                                            ★★★★★
                                        </span> 
                                    ))}
                                    </div>
                                </div>
                                {/* Employed Interns */}
                                <div>
                                    <p className="text-2xl font-semibold">2000+</p>
                                    <p className="text-sm text-gray-500">Employed interns</p>
                                </div>
                                {/* Employers Served */}
                                 <div>
                                    <p className="text-2xl font-semibold">500+</p>
                                    <p className="text-sm text-gray-500">Employers served</p>
                                </div>
                                </div>
                                {/* Buttons */}
                                <div className="flex gap-4">
                                    <button className="bg-[var(--primary-orange)] text-white px-6 py-3 rounded-lg font-medium">
                                        Join as Employer
                                    </button>

                                    <button className="border border-[var(--primary-orange)] text-[var(--primary-orange)] px-6 py-3 rounded-lg font-medium">
                                        Join as Intern
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

            </div>
        </section>
    );
};
export default TrustedPLatform;
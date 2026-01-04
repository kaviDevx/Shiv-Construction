export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Shiv Construction
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
              With years of experience in the construction industry, Shiv Construction 
              has established itself as a trusted name in delivering exceptional 
              construction projects. We combine traditional craftsmanship with modern 
              techniques to bring your vision to life.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Our commitment to quality, integrity, and customer satisfaction sets us 
              apart. Every project we undertake is a testament to our dedication to 
              excellence and our passion for building structures that stand the test 
              of time.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm sm:text-base text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600">Expert Team</div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                To deliver superior construction services that exceed expectations, 
                while maintaining the highest standards of quality, safety, and 
                professionalism in every project we undertake.
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Vision</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                To be the most trusted and respected construction company, known for 
                innovation, reliability, and creating lasting value for our clients 
                and communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Projects() {
  const projects = [
    {
      title: 'Modern Residential Complex',
      category: 'Residential',
      description: 'A contemporary residential complex featuring sustainable design and modern amenities.',
    },
    {
      title: 'Commercial Office Building',
      category: 'Commercial',
      description: 'State-of-the-art office space designed for productivity and employee well-being.',
    },
    {
      title: 'Luxury Villa Renovation',
      category: 'Renovation',
      description: 'Complete transformation of a classic villa into a modern luxury residence.',
    },
    {
      title: 'Industrial Warehouse',
      category: 'Industrial',
      description: 'Large-scale warehouse facility with advanced logistics and storage solutions.',
    },
    {
      title: 'Shopping Mall Development',
      category: 'Commercial',
      description: 'Multi-level shopping complex with retail spaces and entertainment areas.',
    },
    {
      title: 'Eco-Friendly Housing Project',
      category: 'Residential',
      description: 'Sustainable housing development with green building practices and energy efficiency.',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Our Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Showcasing our portfolio of successful construction projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 sm:transform sm:hover:-translate-y-2"
            >
              <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-white text-center p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏗️</div>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider opacity-90">
                    {project.category}
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


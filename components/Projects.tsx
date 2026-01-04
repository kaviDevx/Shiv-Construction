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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our portfolio of successful construction projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-4xl mb-4">🏗️</div>
                  <div className="text-sm font-semibold uppercase tracking-wider opacity-90">
                    {project.category}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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


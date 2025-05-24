const AboutNature = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            О природе Кавказа
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Кавказский регион — один из самых биологически разнообразных уголков
            планеты
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
              Уникальная экосистема
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Кавказские горы являются домом для более чем 6500 видов растений,
              многие из которых являются эндемиками региона. Здесь встречаются
              альпийские луга, древние леса и степи.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">
                  Более 400 видов позвоночных животных
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">
                  1600 видов эндемичных растений
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">
                  Высота до 5642 метров (Эльбрус)
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1464822759844-d150f39bf2a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Горный пейзаж Кавказа"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNature;

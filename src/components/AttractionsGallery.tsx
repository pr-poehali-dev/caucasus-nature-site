const AttractionsGallery = () => {
  const attractions = [
    {
      id: 1,
      title: "Эльбрус",
      description: "Высочайшая вершина России",
      image:
        "https://images.unsplash.com/photo-1571418212037-7c90f9e8959c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Домбай",
      description: "Горнолыжный курорт и природный заповедник",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Приэльбрусье",
      description: "Уникальные альпийские луга",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-16 px-4 bg-emerald-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Достопримечательности</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Откройте для себя самые красивые места Кавказа
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {attraction.title}
                  </h3>
                  <p className="text-emerald-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {attraction.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsGallery;

import { Card, CardContent } from "@/components/ui/card";

const AttractionsGallery = () => {
  const attractions = [
    {
      name: "Эльбрус",
      description: "Высочайшая вершина Кавказа и Европы",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      height: "5642 м",
    },
    {
      name: "Казбек",
      description: "Священная гора грузинских легенд",
      image:
        "https://images.unsplash.com/photo-1608890042722-95400fe22ad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      height: "5033 м",
    },
    {
      name: "Домбай",
      description: "Жемчужина Карачаево-Черкесии",
      image:
        "https://images.unsplash.com/photo-1564135433317-5c6013f5bb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      height: "4046 м",
    },
    {
      name: "Архыз",
      description: "Горный курорт с кристально чистым воздухом",
      image:
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      height: "2000 м",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Величественные вершины
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Каждая гора Кавказа имеет свой характер и неповторимую красоту
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {attractions.map((attraction, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${attraction.image})` }}
                />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  {attraction.height}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {attraction.name}
                </h3>
                <p className="text-slate-300 text-sm">
                  {attraction.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsGallery;

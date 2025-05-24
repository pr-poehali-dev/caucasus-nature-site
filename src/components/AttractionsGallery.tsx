import { Card, CardContent } from "@/components/ui/card";

const AttractionsGallery = () => {
  const attractions = [
    {
      name: "Эльбрус",
      description: "Высочайшая вершина Кавказа и Европы",
      image:
        "https://cdn.poehali.dev/files/66cb98a9-c0d7-4465-a1c8-e40e88d7e635.jpg",
      height: "5642 м",
    },
    {
      name: "Казбек",
      description: "Священная гора грузинских легенд",
      image:
        "https://cdn.poehali.dev/files/69757d59-2768-4971-aaca-b88e4481084f.jpeg",
      height: "5033 м",
    },
    {
      name: "Домбай",
      description: "Жемчужина Карачаево-Черкесии",
      image:
        "https://cdn.poehali.dev/files/ad6a1dc5-ed25-4318-83ab-0445a347b1a4.jpeg",
      height: "4046 м",
    },
    {
      name: "Архыз",
      description: "Горный курорт с кристально чистым воздухом",
      image:
        "https://cdn.poehali.dev/files/3f2b5b37-12ec-40e1-bff5-fc7d7a481f3c.jpg",
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

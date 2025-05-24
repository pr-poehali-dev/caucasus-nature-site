import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FloraFauna = () => {
  const animals = [
    {
      name: "Кавказский леопард",
      description: "Редчайший подвид, находящийся под угрозой исчезновения",
      status: "Критически угрожаемый",
      emoji: "🐆",
    },
    {
      name: "Кавказский тур",
      description: "Горный козел, обитающий на скалистых склонах",
      status: "Уязвимый",
      emoji: "🦌",
    },
    {
      name: "Бурый медведь",
      description: "Крупнейший хищник кавказских лесов",
      status: "Стабильный",
      emoji: "🐻",
    },
  ];

  const plants = [
    {
      name: "Рододендрон кавказский",
      description: "Вечнозеленый кустарник с яркими цветами",
      zone: "Субальпийский пояс",
      emoji: "🌸",
    },
    {
      name: "Пихта кавказская",
      description: "Эндемичное дерево, достигающее 60 метров",
      zone: "Горно-лесной пояс",
      emoji: "🌲",
    },
    {
      name: "Тис ягодный",
      description: "Реликтовое дерево возрастом до 4000 лет",
      zone: "Колхидские леса",
      emoji: "🌿",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Флора и фауна
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Кавказ — дом для множества уникальных видов растений и животных
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Фауна */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              🦅 Животный мир
            </h3>
            <div className="space-y-6">
              {animals.map((animal, index) => (
                <Card
                  key={index}
                  className="border-emerald-200 hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <span className="text-2xl">{animal.emoji}</span>
                      {animal.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">{animal.description}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        animal.status === "Критически угрожаемый"
                          ? "bg-red-100 text-red-700"
                          : animal.status === "Уязвимый"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                      }`}
                    >
                      {animal.status}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Флора */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              🌺 Растительный мир
            </h3>
            <div className="space-y-6">
              {plants.map((plant, index) => (
                <Card
                  key={index}
                  className="border-emerald-200 hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <span className="text-2xl">{plant.emoji}</span>
                      {plant.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">{plant.description}</p>
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {plant.zone}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloraFauna;

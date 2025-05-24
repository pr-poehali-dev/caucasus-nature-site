const FloraFauna = () => {
  const species = [
    {
      category: "Флора",
      items: [
        {
          name: "Рододендрон кавказский",
          description: "Вечнозеленый кустарник",
        },
        { name: "Пихта кавказская", description: "Эндемичное хвойное дерево" },
        { name: "Альпийские маки", description: "Редкие горные цветы" },
      ],
    },
    {
      category: "Фауна",
      items: [
        { name: "Кавказский тур", description: "Горный козел-эндемик" },
        { name: "Бурый медведь", description: "Крупный хищник региона" },
        { name: "Беркут", description: "Величественная хищная птица" },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Флора и фауна
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Богатое биоразнообразие Кавказских гор
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {species.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border-l-4 border-emerald-500 pl-4"
                  >
                    <h4 className="text-lg font-medium text-gray-900 mb-1">
                      {item.name}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-emerald-100 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">
              Охрана природы
            </h3>
            <p className="text-emerald-800">
              Кавказский биосферный заповедник — один из старейших заповедников
              России, созданный для защиты уникальной природы региона.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloraFauna;

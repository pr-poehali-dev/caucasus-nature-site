import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutNature = () => {
  const features = [
    {
      title: "Биоразнообразие",
      description:
        "Более 6000 видов растений и 1000 видов позвоночных животных",
      icon: "🌿",
    },
    {
      title: "Горные экосистемы",
      description:
        "От субтропических лесов до альпийских лугов на высоте 5000м",
      icon: "🏔️",
    },
    {
      title: "Заповедники",
      description:
        "13 заповедников и национальных парков охраняют уникальную природу",
      icon: "🦅",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Уникальная экосистема
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Кавказ — это один из важнейших центров биоразнообразия на планете,
            где сохранились реликтовые виды и эндемики
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-emerald-100"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-slate-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-emerald-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Древние леса Кавказа
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Колхидские и гирканские леса Кавказа — это живые свидетели
                древних эпох. Здесь растут деревья, которые помнят времена
                динозавров.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Буковые, каштановые и дубовые рощи создают многоярусную
                экосистему, где каждый уровень имеет свою уникальную флору и
                фауну.
              </p>
            </div>
            <div
              className="h-64 md:h-80 bg-cover bg-center rounded-xl"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNature;

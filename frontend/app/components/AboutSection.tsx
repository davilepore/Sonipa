import { Heart, Shield, Users, Home } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Resgate com Amor",
    description: "Resgatamos cães em situação de risco e oferecemos todo o cuidado necessário."
  },
  {
    icon: Shield,
    title: "Cuidados Veterinários",
    description: "Todos os animais recebem vacinas, castração e tratamentos médicos completos."
  },
  {
    icon: Users,
    title: "Acompanhamento",
    description: "Oferecemos suporte antes, durante e após o processo de adoção."
  },
  {
    icon: Home,
    title: "Lares Permanentes",
    description: "Encontramos famílias responsáveis para oferecer um lar definitivo."
  }
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a SONIPA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há 8 anos transformando vidas através do amor incondicional dos cães. Nossa missão é resgatar, 
            cuidar e encontrar lares amorosos para cada amigo de quatro patas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const bgColor = index % 2 === 0 ? '#EEA71E20' : '#23809B20';
            const iconColor = index % 2 === 0 ? '#EEA71E' : '#23809B';
            return (
              <div key={feature.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: bgColor }}>
                  <Icon className="w-8 h-8" style={{ color: iconColor }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Como Funciona a Adoção?
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#EEA71E' }}>
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Escolha seu Amigo</h4>
                    <p className="text-gray-600">Navegue pelos perfis e encontre o cão perfeito para você.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#23809B' }}>
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Preencha o Formulário</h4>
                    <p className="text-gray-600">Cadastre-se e responda algumas perguntas sobre seu estilo de vida.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#EEA71E' }}>
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Visita e Entrevista</h4>
                    <p className="text-gray-600">Conheça o cão pessoalmente e converse com nossa equipe.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#23809B' }}>
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Leve seu Amigo para Casa</h4>
                    <p className="text-gray-600">Complete a documentação e comece uma nova história juntos!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1661552066736-935e0cad1782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjYXJpbmclMjBkb2d8ZW58MXx8fHwxNzc0MzEwOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Voluntário cuidando de cachorro"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
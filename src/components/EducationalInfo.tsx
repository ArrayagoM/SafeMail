import { Shield, Lock, AlertCircle, Key } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EducationalInfo = () => {
  const infoCards = [
    {
      icon: Shield,
      title: "¿Qué significa este resultado?",
      description: "Una filtración de datos ocurre cuando información personal es expuesta en línea sin autorización. Si tu email aparece en una filtración, significa que fue parte de una base de datos comprometida.",
      color: "text-accent"
    },
    {
      icon: AlertCircle,
      title: "¿Qué hacer si tu email fue filtrado?",
      description: "Lo más importante es cambiar tus contraseñas inmediatamente. Usa contraseñas únicas y fuertes para cada servicio, y considera activar la autenticación de dos factores en todas tus cuentas importantes.",
      color: "text-warning"
    },
    {
      icon: Lock,
      title: "Cómo proteger tus cuentas",
      description: "Usa un gestor de contraseñas para crear y almacenar contraseñas seguras. Nunca reutilices contraseñas entre diferentes servicios. Mantén tu software actualizado y ten cuidado con emails sospechosos.",
      color: "text-success"
    },
    {
      icon: Key,
      title: "Prevención es la clave",
      description: "Verifica regularmente si tus cuentas han sido comprometidas. Mantente informado sobre las últimas filtraciones. Usa servicios que tomen la seguridad en serio y protege tu información personal.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Información para Protegerte
          </h2>
          <p className="text-xl text-muted-foreground">
            Conocimiento es poder cuando se trata de tu seguridad digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {infoCards.map((card, index) => (
            <Card 
              key={index}
              className="hover:shadow-soft transition-smooth hover:scale-[1.02] border-border/50"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`${card.color} bg-muted p-3 rounded-lg`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{card.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalInfo;

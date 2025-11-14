import { Bell, Shield, Key, Zap, Crown, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProFeatures = () => {
  const features = [
    {
      icon: Bell,
      title: "Monitoreo Continuo",
      description: "Te alertaremos inmediatamente si tu email aparece en nuevas filtraciones de datos"
    },
    {
      icon: Shield,
      title: "Plan de Seguridad Personalizado",
      description: "Recibe recomendaciones específicas basadas en las filtraciones que te afectaron"
    },
    {
      icon: Key,
      title: "Herramientas de Contraseñas",
      description: "Acceso a verificador de fuerza y generador de contraseñas seguras"
    },
    {
      icon: Zap,
      title: "Alertas en Tiempo Real",
      description: "Notificaciones instantáneas por email y SMS cuando detectemos nuevas amenazas"
    }
  ];

  const planBenefits = [
    "Monitoreo 24/7 de nuevas filtraciones",
    "Alertas inmediatas por email",
    "Plan de acción personalizado",
    "Herramientas de gestión de contraseñas",
    "Análisis de patrones de seguridad",
    "Soporte prioritario"
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <Badge className="bg-accent text-accent-foreground mb-4">
            <Crown className="w-4 h-4 mr-2" />
            Protección Avanzada
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Protección Completa con SafeMail PRO
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantén tu identidad digital segura con monitoreo continuo y herramientas avanzadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="hover:shadow-soft transition-smooth hover:scale-[1.02] border-border/50"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 text-accent p-3 rounded-lg">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="gradient-primary text-white border-0 shadow-glow">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Plan PRO</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">$3.99</span>
                    <span className="text-xl opacity-90">/mes</span>
                  </div>
                  <p className="text-white/80 mt-2">o $29.99/año (ahorra 37%)</p>
                </div>

                <ul className="space-y-3">
                  {planBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-lg transition-smooth hover:scale-105"
                >
                  Comenzar Ahora
                </Button>
                
                <p className="text-sm text-white/70 text-center">
                  Cancela cuando quieras • Sin compromiso
                </p>
              </div>

              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Shield className="w-32 h-32 mx-auto text-white/90 mb-6" />
                  <h4 className="text-2xl font-bold text-center mb-3">
                    Protección Total
                  </h4>
                  <p className="text-white/80 text-center">
                    Mantén tu identidad digital segura con nuestro sistema de monitoreo continuo y alertas en tiempo real
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProFeatures;

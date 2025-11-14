import { useState } from "react";
import { Search, Loader2, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ResultsDisplay from "./ResultsDisplay";

interface BreachResult {
  compromised: boolean;
  breaches?: Array<{
    Name: string;
    BreachDate: string;
    DataClasses: string[];
  }>;
  error?: boolean;
  message?: string;
}

const EmailVerifier = () => {
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<BreachResult | null>(null);
  const { toast } = useToast();

  const checkEmail = async (emailToCheck: string) => {
    // Simulación de verificación - En producción usar la API real de Have I Been Pwned
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulación de resultados
    const random = Math.random();
    if (random > 0.5) {
      return {
        compromised: true,
        breaches: [
          {
            Name: "LinkedIn",
            BreachDate: "2012-05-05",
            DataClasses: ["Email addresses", "Passwords"]
          },
          {
            Name: "Adobe",
            BreachDate: "2013-10-04",
            DataClasses: ["Email addresses", "Password hints", "Passwords", "Usernames"]
          }
        ]
      };
    } else {
      return {
        compromised: false,
        breaches: []
      };
    }
  };

  const handleVerify = async () => {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email requerido",
        description: "Por favor ingresa un email válido",
      });
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Email inválido",
        description: "Por favor verifica el formato del email",
      });
      return;
    }

    setIsVerifying(true);
    setResult(null);

    try {
      const verificationResult = await checkEmail(email);
      setResult(verificationResult);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error en la verificación",
        description: "Hubo un problema al verificar el email. Intenta nuevamente.",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <section id="verifier" className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-card rounded-2xl shadow-soft p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Verificador de Seguridad</h2>
            <p className="text-muted-foreground">
              Descubre en segundos si tu email fue comprometido
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="tu.email@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isVerifying}
                className="text-lg h-14 transition-smooth focus:shadow-glow"
              />
              <Button 
                onClick={handleVerify}
                disabled={isVerifying}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 transition-smooth hover:scale-105"
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Verificar
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <p>Tu email no será almacenado. Verificación 100% segura.</p>
            </div>
          </div>

          {result && <ResultsDisplay result={result} email={email} />}
        </div>
      </div>
    </section>
  );
};

export default EmailVerifier;

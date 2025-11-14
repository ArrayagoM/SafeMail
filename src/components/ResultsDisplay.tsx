import { CheckCircle, AlertTriangle, Calendar, Database } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

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

interface ResultsDisplayProps {
  result: BreachResult;
  email: string;
}

const ResultsDisplay = ({ result, email }: ResultsDisplayProps) => {
  if (result.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle>Error en la verificación</AlertTitle>
        <AlertDescription>{result.message}</AlertDescription>
      </Alert>
    );
  }

  if (!result.compromised) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Alert className="bg-success text-success-foreground border-0 shadow-soft">
          <CheckCircle className="h-6 w-6" />
          <AlertTitle className="text-xl font-bold mb-2">
            ¡Excelentes noticias!
          </AlertTitle>
          <AlertDescription className="text-success-foreground/90 text-base">
            <strong>{email}</strong> no fue encontrado en filtraciones de datos conocidas.
            Tu email está seguro según nuestra base de datos.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Alert className="bg-destructive text-destructive-foreground border-0 shadow-soft">
        <AlertTriangle className="h-6 w-6" />
        <AlertTitle className="text-xl font-bold mb-2">
          Atención: Email Comprometido
        </AlertTitle>
        <AlertDescription className="text-destructive-foreground/90 text-base">
          <strong>{email}</strong> fue encontrado en {result.breaches?.length || 0} filtración
          {(result.breaches?.length || 0) > 1 ? 'es' : ''} de datos.
        </AlertDescription>
      </Alert>

      <div className="bg-card rounded-xl border border-border p-6 space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Database className="w-5 h-5 text-destructive" />
          Filtraciones Encontradas:
        </h3>
        
        <div className="space-y-3">
          {result.breaches?.map((breach, index) => (
            <div 
              key={index}
              className="bg-muted rounded-lg p-4 space-y-2 hover:bg-muted/70 transition-smooth"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-semibold text-foreground text-lg">{breach.Name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {new Date(breach.BreachDate).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {breach.DataClasses.map((dataClass, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {dataClass}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mt-4">
          <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Recomendación Inmediata
          </h4>
          <ul className="text-sm space-y-1 text-foreground/80 ml-7">
            <li>• Cambia tu contraseña inmediatamente en los servicios afectados</li>
            <li>• Usa contraseñas únicas y fuertes para cada servicio</li>
            <li>• Activa la autenticación de dos factores donde sea posible</li>
            <li>• Considera usar un gestor de contraseñas confiable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;

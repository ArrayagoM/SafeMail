import { Shield, Mail, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">SafeMail Check</span>
            </div>
            <p className="text-background/70 text-sm">
              Verifica la seguridad de tu email de forma gratuita y confiable.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-smooth">Verificador</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Plan PRO</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Precios</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Guías de Seguridad</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Metodología</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-smooth">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Términos</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Cookies</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            © 2024 SafeMail Check. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-background/70">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Sin Almacenamiento</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

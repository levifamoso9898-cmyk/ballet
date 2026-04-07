import { useEffect, useRef } from "react";
import { Layers, FileText, Users, Smartphone } from "lucide-react";

const benefits = [
  { icon: Layers, title: "+250 Dinâmicas Prontas", desc: "Aquecimento, barra, centro e relaxamento — organizadas por categoria." },
  { icon: FileText, title: "Planos de Aula Organizados", desc: "Cada dinâmica com objetivo, materiais e dicas de aplicação." },
  { icon: Users, title: "Todas as Faixas Etárias", desc: "Do ballet infantil ao adulto, para iniciantes e avançados." },
  { icon: Smartphone, title: "Acesso Imediato em PDF", desc: "Baixe e use agora mesmo, no celular ou impresso." },
];

const BenefitsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
          e.target.classList.remove('opacity-0', 'translate-y-7');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[88px] px-5 bg-cream" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <span className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-[0.7rem] font-bold tracking-[0.12em] uppercase py-1.5 px-4 rounded-full border border-primary/20">
            O que está incluído
          </span>
          <h2 className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] font-bold mt-4 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Tudo que Você Vai<br /><span className="text-gradient">Receber</span>
          </h2>
          <p className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] text-muted mt-3 max-w-[480px] mx-auto leading-relaxed">
            Mais de 250 dinâmicas organizadas, prontas para aplicar em qualquer faixa etária.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] bg-card rounded-xl p-8 text-center border border-primary/[0.08] shadow-sm hover:-translate-y-1.5 hover:shadow-lg"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-[60px] h-[60px] rounded-xl bg-secondary flex items-center justify-center mx-auto mb-5">
                <b.icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-[0.85rem] text-muted leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "As dinâmicas funcionam para ballet infantil?", a: "Sim! O material inclui dinâmicas específicas para todas as faixas etárias, do ballet infantil (3 anos+) ao adulto, com linguagem e abordagem adaptadas para cada grupo." },
  { q: "Como recebo o material após a compra?", a: "O acesso é imediato! Após a confirmação do pagamento você receberá um e-mail com o link para download do PDF. Simples e rápido." },
  { q: "Posso imprimir o material?", a: "Sim! O PDF foi criado para ser impresso ou usado digitalmente. Monte sua pasta física ou use no celular durante as aulas." },
  { q: "Como funciona a garantia de reembolso?", a: "Se por qualquer motivo você não ficar satisfeita, basta enviar um e-mail em até 30 dias e devolvemos 100% do valor. Sem perguntas, sem burocracia." },
  { q: "Serve para professoras iniciantes?", a: "Com certeza! Cada dinâmica vem com passo a passo e dicas de aplicação. Ideal para iniciantes que querem começar bem e para experientes que querem renovar o repertório." },
];

const FaqSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      <div className="max-w-[740px] mx-auto">
        <div className="text-center mb-12">
          <span className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-[0.7rem] font-bold tracking-[0.12em] uppercase py-1.5 px-4 rounded-full border border-primary/20">
            Dúvidas Frequentes
          </span>
          <h2 className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] font-bold mt-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] bg-card rounded-xl border border-primary/[0.1] overflow-hidden hover:shadow-md"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <button
                className="w-full flex items-center justify-between py-[22px] px-6 bg-transparent border-none cursor-pointer text-[0.95rem] font-semibold text-foreground text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                <p className="px-6 text-[0.9rem] leading-relaxed text-muted">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

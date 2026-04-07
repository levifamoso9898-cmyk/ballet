import { useEffect, useRef, useState } from "react";
import { Check, Gift } from "lucide-react";
import UpsellModal from "./UpsellModal";

const PricingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [showUpsell, setShowUpsell] = useState(false);

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

  const basicFeatures = ["+150 Dinâmicas de Ballet", "Acesso Imediato", "Metodologia Comprovada", "Garantia de 7 dias"];
  const premiumFeatures = ["+250 Dinâmicas de Ballet", "Atualizações Mensais", "Suporte VIP Prioritário", "Acesso Imediato", "Garantia de 7 dias"];
  const bonuses = ["Lista de Músicas por Fase", "Planejamento Semestral", "Fichas de Avaliação"];

  return (
    <>
      <section id="precos" className="py-[88px] px-5 bg-cream" ref={ref}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-[0.7rem] font-bold tracking-[0.12em] uppercase py-1.5 px-4 rounded-full border border-primary/20">
              Escolha seu Plano
            </span>
            <h2 className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] font-bold mt-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Investimento <span className="text-gradient">Acessível</span>
            </h2>
            <p className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] text-muted mt-2.5">
              Bônus no valor de <strong className="text-accent">R$ 151</strong> inclusos em todos os planos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[700px] mx-auto">
            {/* Básico */}
            <div className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] bg-card rounded-3xl p-10 relative border-[1.5px] border-primary/[0.12] shadow-md hover:-translate-y-2 hover:shadow-xl" style={{ transitionDelay: '100ms' }}>
              <p className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-muted mb-5">Plano Básico</p>
              <div className="mb-2"><span className="text-[0.85rem] text-muted line-through">De R$ 197</span></div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-bold text-primary leading-none" style={{ fontSize: '3.2rem' }}>R$ 10</span>
              </div>
              <p className="text-[0.8rem] text-muted mb-7">pagamento único</p>

              <div className="flex flex-col gap-2.5 mb-7">
                {basicFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center flex-shrink-0">
                      <Check className="w-[11px] h-[11px] text-primary-foreground" strokeWidth={3} />
                    </div>
                    <span className="text-[0.85rem] text-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowUpsell(true)}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-br from-primary to-primary-deep text-primary-foreground font-bold text-[0.95rem] tracking-[0.08em] uppercase py-4 px-9 rounded-[14px] cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] border-none"
                style={{ boxShadow: '0 8px 32px rgba(184,92,110,0.38), inset 0 1px 0 rgba(255,255,255,0.15)' }}
              >
                COMEÇAR AGORA
              </button>
              <img loading="lazy" src="https://i.imgur.com/JJlHPgI.png" alt="Compra Segura" className="w-full mt-5 rounded-lg" />
            </div>

            {/* Premium */}
            <div className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] bg-card rounded-3xl p-10 relative border-2 border-primary shadow-xl hover:-translate-y-2 hover:shadow-2xl" style={{ transitionDelay: '200ms' }}>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-br from-primary to-primary-deep text-primary-foreground text-[0.7rem] font-bold tracking-[0.1em] uppercase py-1.5 px-[18px] rounded-full whitespace-nowrap" style={{ boxShadow: '0 4px 16px rgba(184,92,110,0.4)' }}>
                  ✦ MAIS POPULAR
                </span>
              </div>
              <p className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-muted mb-5 mt-2">Plano Premium</p>
              <div className="mb-2"><span className="text-[0.85rem] text-muted line-through">De R$ 347</span></div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-bold text-primary leading-none" style={{ fontSize: '3.2rem' }}>R$ 27</span>
              </div>
              <p className="text-[0.8rem] text-muted mb-7">pagamento único</p>

              <div className="flex flex-col gap-2.5 mb-7">
                {premiumFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center flex-shrink-0">
                      <Check className="w-[11px] h-[11px] text-primary-foreground" strokeWidth={3} />
                    </div>
                    <span className="text-[0.85rem] text-foreground">{f}</span>
                  </div>
                ))}
                {bonuses.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-secondary border border-primary/20 flex items-center justify-center flex-shrink-0 text-xs">
                      🎁
                    </div>
                    <span className="text-[0.85rem] text-foreground">{b}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://pay.wiapy.com/EE0ung9sIa"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-br from-primary to-primary-deep text-primary-foreground font-bold tracking-[0.08em] uppercase py-[18px] px-11 rounded-[14px] cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.03]"
                style={{ boxShadow: '0 8px 32px rgba(184,92,110,0.4), inset 0 1px 0 rgba(255,255,255,0.2)' }}
              >
                QUERO O PREMIUM
              </a>
              <img loading="lazy" src="https://i.imgur.com/JJlHPgI.png" alt="Compra Segura" className="w-full mt-5 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <UpsellModal open={showUpsell} onClose={() => setShowUpsell(false)} />
    </>
  );
};

export default PricingSection;

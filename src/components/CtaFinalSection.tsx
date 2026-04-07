import { useEffect, useRef } from "react";

const CtaFinalSection = () => {
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
    <section className="section-dark py-[88px] px-5 text-center" ref={ref}>
      <div className="max-w-[740px] mx-auto relative z-10">
        <div className="text-[3rem] mb-5">🩰</div>
        <h2 className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#fff' }}>
          Pronta para <em className="text-[#DFA0B0]">Transformar</em><br />suas Aulas de Ballet?
        </h2>
        <p className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] max-w-[480px] mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Mais de 250 dinâmicas criativas esperando por você. Comece hoje e veja a diferença já na primeira aula.
        </p>
        <div className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms]">
          <a
            href="#precos"
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-br from-primary to-primary-deep text-primary-foreground font-bold text-lg tracking-[0.08em] uppercase py-[18px] px-11 rounded-[14px] cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.03]"
            style={{ boxShadow: '0 8px 32px rgba(184,92,110,0.4), inset 0 1px 0 rgba(255,255,255,0.2)' }}
          >
            QUERO MINHAS +250 DINÂMICAS AGORA →
          </a>
          <p className="text-[0.8rem] mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
            ✓ Download imediato &nbsp;•&nbsp; ✓ Garantia de 30 dias &nbsp;•&nbsp; ✓ Pagamento único
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;

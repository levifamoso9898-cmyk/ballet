import { useEffect, useRef } from "react";

const GuaranteeSection = () => {
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
    <section className="py-14 px-5 bg-cream-dark" ref={ref}>
      <div className="max-w-[560px] mx-auto">
        <div className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] bg-card rounded-xl p-12 text-center border border-primary/[0.08] shadow-sm">
          <img loading="lazy" src="https://i.imgur.com/GC8RSmP.png" alt="Garantia 7 dias" className="w-[110px] h-[110px] object-contain mx-auto mb-6" />
          <h2 className="font-bold text-foreground mb-3" style={{ fontSize: '2rem' }}>Garantia Incondicional</h2>
          <div className="w-12 h-0.5 mx-auto mb-5" style={{ background: 'linear-gradient(90deg, hsl(348,33%,54%), hsl(32,44%,57%))' }} />
          <p className="text-[0.95rem] text-muted leading-relaxed mb-2">Teste o material sem risco por <strong className="text-foreground">7 dias</strong>.</p>
          <p className="text-[0.95rem] text-muted leading-relaxed">Se não fizer sentido para você, devolveremos <strong className="text-foreground">100% do seu dinheiro</strong>, sem perguntas.</p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;

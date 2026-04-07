const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 px-5" style={{ background: 'linear-gradient(160deg, #FDF9F7 0%, hsl(30,33%,97%) 40%, #F5EBF0 100%)' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, hsla(348,33%,54%,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(32,44%,57%,0.07) 0%, transparent 40%)' }} />
      <div className="absolute w-80 h-80 -top-20 -right-20 rounded-full animate-float pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(348,33%,54%,0.08) 0%, transparent 70%)' }} />
      <div className="absolute w-48 h-48 bottom-[10%] -left-16 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsla(32,44%,57%,0.07) 0%, transparent 70%)', animation: 'float 8s ease-in-out infinite 2s' }} />

      <div className="container relative z-10">
        <div className="text-center max-w-[820px] mx-auto">
          <div className="animate-fade-up mb-5">
            <span className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-[0.7rem] font-bold tracking-[0.12em] uppercase py-1.5 px-4 rounded-full border border-primary/20">
              ✦ Lançamento Especial
            </span>
          </div>

          <h1 className="animate-fade-up font-bold leading-[1.1] mb-4" style={{ animationDelay: '0.1s', fontSize: 'clamp(2.8rem, 9vw, 5.2rem)' }}>
            <span className="text-gradient">+250 Dinâmicas</span><br />
            <span className="text-ink-mid">de Ballet</span>
          </h1>

          <p className="animate-fade-up text-primary italic font-bold mb-4" style={{ animationDelay: '0.2s', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)' }}>
            Prontas para aplicar. Do planejamento à prática.
          </p>

          <p className="animate-fade-up text-muted max-w-[580px] mx-auto mb-9 leading-relaxed" style={{ animationDelay: '0.25s' }}>
            O maior pack de dinâmicas para aulas de ballet do Brasil. Planejamento completo, criativo e pronto para usar, para professoras que querem <strong className="text-foreground">transformar cada aula em uma experiência inesquecível.</strong>
          </p>

          {/* Mockup Image replacing VSL */}
          <div className="animate-fade-up flex justify-center mb-11" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://i.ibb.co/p6Kcm9jS/mockup-ballet-final.png"
              alt="+250 Dinâmicas de Ballet - Mockup"
              className="max-w-full h-auto drop-shadow-2xl"
              style={{ maxHeight: '480px' }}
            />
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <a
              href="#precos"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-br from-primary to-primary-deep text-primary-foreground font-bold text-lg tracking-[0.08em] uppercase py-[18px] px-11 rounded-[14px] cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.03] mb-4"
              style={{ boxShadow: '0 8px 32px rgba(184,92,110,0.4), inset 0 1px 0 rgba(255,255,255,0.2)' }}
            >
              QUERO MINHAS +250 DINÂMICAS →
            </a>
            <p className="text-[0.8rem] text-muted">✓ Acesso imediato &nbsp;•&nbsp; ✓ Garantia de 7 dias &nbsp;•&nbsp; ✓ Pagamento único</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

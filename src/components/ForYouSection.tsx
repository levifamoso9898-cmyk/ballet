import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";

const forYou = [
  "É professora de ballet e quer renovar suas aulas",
  "Leciona para crianças e busca dinâmicas lúdicas e criativas",
  "Quer economizar horas de planejamento toda semana",
  "Busca engajar mais os alunos e reduzir a evasão",
  "Tem escola de dança ou trabalha em academias",
  "Quer se destacar como professora criativa e referência",
];

const notForYou = [
  "Não é professora de dança e não trabalha com ensino",
  "Quer o material mas não pretende aplicar nas aulas",
];

const ForYouSection = () => {
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
    <section className="py-[88px] px-5" style={{ background: 'linear-gradient(160deg, #FDF5F7 0%, hsl(30,22%,93%) 100%)' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <span className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-[0.7rem] font-bold tracking-[0.12em] uppercase py-1.5 px-4 rounded-full border border-primary/20">
            Para quem é
          </span>
          <h2 className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] font-bold mt-4 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Este Material é <span className="text-gradient">Para Você</span> Se...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* For you */}
          <div className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms]" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2ECC71, #27AE60)' }}>
                <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
              </div>
              <h3 className="font-bold text-foreground">É para você se:</h3>
            </div>
            <div className="flex flex-col gap-2.5">
              {forYou.map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-4 px-5 flex items-center gap-3 border border-primary/[0.08] shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center flex-shrink-0">
                    <Check className="w-[11px] h-[11px] text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-[0.9rem] text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not for you */}
          <div className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms]" style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#E0D0D6] flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-muted" strokeWidth={3} />
              </div>
              <h3 className="font-bold text-muted">Não é para você se:</h3>
            </div>
            <div className="flex flex-col gap-2.5 mb-8">
              {notForYou.map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-4 px-5 flex items-center gap-3 border border-foreground/[0.06]">
                  <div className="w-6 h-6 rounded-full bg-[#C8C0C4] flex items-center justify-center flex-shrink-0">
                    <X className="w-[11px] h-[11px] text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-[0.9rem] text-muted">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-secondary to-[#FFF0F4] rounded-3xl p-8 border border-primary/[0.15] text-center">
              <p className="font-bold text-primary leading-none" style={{ fontSize: '3.5rem' }}>250<span className="text-[1.8rem]">+</span></p>
              <p className="text-[0.9rem] text-muted mt-1.5">dinâmicas prontas para usar hoje</p>
            </div>
          </div>
        </div>

        <div className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] text-center mt-10">
          <p className="text-[1.1rem] text-muted">Se você se identificou, <strong className="text-foreground">este é o seu material!</strong></p>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;

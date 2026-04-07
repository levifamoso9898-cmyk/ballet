import { useEffect, useRef } from "react";

const ProblemaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    sectionRef.current?.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const problems = [
    { emoji: "😩", text: '"Fico sem criatividade para criar dinâmicas novas toda semana..."' },
    { emoji: "⏰", text: '"Perco horas planejando e acabo usando sempre as mesmas atividades..."' },
    { emoji: "😟", text: '"Sinto que meus alunos perdem o interesse porque as aulas ficam repetitivas..."' },
  ];

  return (
    <section className="section-dark py-[88px] px-5" ref={sectionRef}>
      <div className="max-w-[740px] mx-auto relative z-10 text-center">
        <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, hsl(348,33%,54%), hsl(32,44%,57%))' }} />
        <h2 className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] font-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: '#fff' }}>
          Você já se sentiu assim<br /><em className="text-[#DFA0B0]">antes de uma aula?</em>
        </h2>
        <p className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] text-[0.8rem] tracking-[0.08em] uppercase mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Situações que toda professora conhece
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {problems.map((p, i) => (
            <div
              key={i}
              className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] rounded-xl p-7"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="text-[2rem] mb-4">{p.emoji}</div>
              <p className="text-[0.93rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{p.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] mt-12">
          <p className="font-semibold" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: '#fff' }}>
            Isso acaba <em className="text-[#DFA0B0]">agora.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemaSection;

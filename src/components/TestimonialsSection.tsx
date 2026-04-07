import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialImages = [
  "https://i.ibb.co/pBz2N1Yv/transferir-4.webp",
  "https://i.ibb.co/7tg2T8fq/transferir-3.webp",
  "https://i.ibb.co/JwmWqcWr/transferir-5-1.webp",
  "https://i.ibb.co/8gDDYTXY/transferir-1.webp",
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonialImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonialImages.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("opacity-100", "translate-y-0");
          e.target.classList.remove("opacity-0", "translate-y-7");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[88px] px-5 bg-cream" ref={ref}>
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-[0.7rem] font-bold tracking-[0.12em] uppercase py-1.5 px-4 rounded-full border border-primary/20">
            Resultados Reais
          </span>
          <h2 className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] font-bold mt-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            O que as <span className="text-gradient">Professoras Dizem</span>
          </h2>
        </div>

        <div className="reveal-item opacity-0 translate-y-7 transition-all duration-[650ms] relative">
          <div className="overflow-hidden rounded-2xl border border-primary/10 shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonialImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Depoimento ${i + 1}`}
                  className="w-full shrink-0 object-contain"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-primary/10 rounded-full p-2 shadow-md hover:bg-card transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-primary/10 rounded-full p-2 shadow-md hover:bg-card transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {testimonialImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary scale-110" : "bg-primary/30"}`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

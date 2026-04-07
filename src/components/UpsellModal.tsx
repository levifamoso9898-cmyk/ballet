import { Gift } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const UpsellModal = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(26,17,24,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-card rounded-3xl max-w-[420px] w-full max-h-[92vh] overflow-y-auto relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-[18px] bg-transparent border-none text-[22px] text-muted cursor-pointer leading-none z-10">×</button>

        <div className="pt-9 px-8 text-center">
          <div className="w-[68px] h-[68px] rounded-full bg-gradient-to-br from-primary to-primary-deep flex items-center justify-center mx-auto mb-5" style={{ boxShadow: '0 8px 24px rgba(184,92,110,0.35)' }}>
            <Gift className="w-[30px] h-[30px] text-primary-foreground" />
          </div>
          <h2 className="font-bold text-foreground mb-1.5 leading-tight text-[1.6rem]">Parabéns! Você<br />ganhou um presente!</h2>
          <p className="text-primary text-[0.85rem] font-semibold mb-1">✦ ✦ ✦</p>
          <p className="text-muted text-[0.9rem]">Oferta exclusiva só para você!</p>
        </div>

        <div className="mx-7 mt-6 rounded-xl p-6 text-center border-[1.5px]" style={{ background: 'linear-gradient(135deg, #FDF8F2, #FFF3E4)', borderColor: 'rgba(200,150,90,0.25)' }}>
          <p className="font-bold text-foreground mb-3">Leve a Versão Completa + Bônus</p>
          <p className="line-through text-muted text-[0.85rem] mb-1">De R$ 347,00</p>
          <div className="font-bold text-primary leading-none" style={{ fontSize: '2.8rem' }}>
            R$ <span className="text-[3.2rem]">19</span><span className="text-[1.3rem]">,90</span>
          </div>
          <p className="text-[#2a9d2a] font-bold text-[0.85rem] mt-2">Economia de R$ 327,10!</p>
        </div>

        <div className="px-7 pt-2">
          <p className="font-bold text-foreground text-[0.95rem] mb-3.5">Você vai receber:</p>
          <div className="flex flex-col gap-2.5">
            {[
              { icon: "✓", color: "text-primary", text: "+250 Dinâmicas de Ballet completas (plano completo)" },
              { icon: "✓", color: "text-primary", text: "Atualizações mensais vitalícias" },
              { icon: "✓", color: "text-primary", text: "Suporte VIP prioritário" },
              { icon: "🎁", color: "text-accent", text: "Lista de Músicas por Fase (Bônus)" },
              { icon: "🎁", color: "text-accent", text: "Planejamento Semestral (Bônus)" },
              { icon: "🎁", color: "text-accent", text: "Fichas de Avaliação (Bônus)" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[0.88rem] text-foreground">
                <span className={`${item.color} font-bold flex-shrink-0`}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div className="px-7 pt-6 pb-8 flex flex-col gap-3 text-center">
          <a
            href="https://pay.wiapy.com/NU23uVeQrL"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-br from-primary to-primary-deep text-primary-foreground font-bold tracking-[0.08em] uppercase py-[18px] px-11 rounded-[14px] cursor-pointer transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.03]"
            style={{ boxShadow: '0 8px 32px rgba(184,92,110,0.4), inset 0 1px 0 rgba(255,255,255,0.2)' }}
          >
            Quero aproveitar por R$ 19,90!
          </a>
          <a
            href="https://pay.wiapy.com/UKUXCht1MF"
            onClick={onClose}
            className="text-muted text-[0.85rem] no-underline p-2 hover:text-foreground transition-colors"
          >
            Continuar com o básico
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpsellModal;

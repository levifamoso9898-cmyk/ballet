import { useEffect, useState } from "react";

const TopBar = () => {
  const [dateText, setDateText] = useState("");

  useEffect(() => {
    const d = new Date();
    const dias = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    setDateText(`${dias[d.getDay()]}, ${String(d.getDate()).padStart(2,'0')} de ${meses[d.getMonth()]} de ${d.getFullYear()}`);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary to-primary-deep text-primary-foreground text-center py-2.5 px-5 text-[0.82rem] font-semibold tracking-wide relative z-50 shadow-lg">
      <span className="opacity-85">🔥</span>
      &nbsp;Oferta válida até hoje,&nbsp;
      <span className="font-extrabold underline underline-offset-[3px]">{dateText}</span>
      &nbsp;—&nbsp;Garanta agora antes que expire!&nbsp;
      <span className="opacity-85">🔥</span>
    </div>
  );
};

export default TopBar;

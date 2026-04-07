const FooterSection = () => {
  return (
    <footer className="bg-ink py-10 px-5 text-center">
      <div className="container">
        <div className="w-12 h-0.5 mx-auto mb-6 opacity-30" style={{ background: 'linear-gradient(90deg, hsl(348,33%,54%), hsl(32,44%,57%))' }} />
        <p className="text-[0.8rem] mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2026 Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 flex-wrap">
          {["Política de Privacidade", "Termos de Uso", "Contato"].map((item) => (
            <a key={item} href="#" className="text-[0.8rem] no-underline transition-colors hover:!text-primary-foreground" style={{ color: 'rgba(255,255,255,0.28)' }}>{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

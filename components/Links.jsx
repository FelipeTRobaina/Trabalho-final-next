import Link from 'next/link'; // Importamos o componente de navegação do Next.js

function Links() {
  return (
    <div className="botoes">
        <Link href="/clima">
            Veja o Clima
        </Link>
        <a href="https://google.com" target="_blank" rel="noreferrer">
            Veja meu Portfólio
        </a>
        
        <a href="https://google.com" target="_blank" rel="noreferrer">
            Sobre mim
        </a>
    </div>
  );
}

export default Links;
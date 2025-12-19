// ATENÇÃO: Não tem mais imports de imagens aqui em cima!
import React from 'react';

const SocialLinks = () => {
  return (
    <div className="sociallinks">
        <a href="https://github.com/SEU-USUARIO" target="_blank" rel="noopener noreferrer">
            <img src="/assets/desktop-logo-icon-git-hub.svg" alt="Github" />
        </a>
        <a href="https://instagram.com/SEU-USUARIO" target="_blank" rel="noopener noreferrer">
            <img src="/assets/desktop-logo-icon-instagram.svg" alt="Instagram" />
        </a>
        <a href="https://youtube.com/SEU-CANAL" target="_blank" rel="noopener noreferrer">
            <img src="/assets/desktop-logo-icon-you-tube.svg" alt="YouTube" />
        </a>
        <a href="https://linkedin.com/in/SEU-PERFIL" target="_blank" rel="noopener noreferrer">
            <img src="/assets/desktop-logo-icon-linked-in.svg" alt="LinkedIn" />
        </a>
    </div>
  );
};

export default SocialLinks;
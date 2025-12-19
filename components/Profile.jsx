// src/components/Profile.jsx
// REMOVEMOS O IMPORT DAQUI

function Profile() {
  return (
    <div className="perfil-card">
      {/* Usamos o caminho direto (string) em vez da variável */}
      <img 
        src="/assets/imagemdeperfil.jpg" 
        alt="Foto" 
        className="foto-perfil" 
      />
      <p className="nome-usuario">@fulano de tal</p>
    </div>
  );
}

export default Profile;
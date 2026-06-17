// ===================== MOSTRAR / OCULTAR SENHA =====================
function mostrarSenha() {
  const senha = document.getElementById("senha");
  const btn = document.getElementById("btnSenha");

  if (!senha || !btn) return;

  if (senha.type === "password") {
    senha.type = "text";
    btn.textContent = "Ocultar";
  } else {
    senha.type = "password";
    btn.textContent = "Mostrar";
  }
}

// ===================== LOGIN =====================
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("loginForm");

  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email");
      const senha = document.getElementById("senha");
      const termos = document.getElementById("termos");

      if (!email.value.trim()) {
        alert("Digite um e-mail.");
        return;
      }

      if (!senha.value.trim()) {
        alert("Digite uma senha.");
        return;
      }

      if (!termos.checked) {
        alert("Aceite os termos para continuar.");
        return;
      }

      // Salva dados do usuário no localStorage (Aceita qualquer email e senha válidos)
      localStorage.setItem("usuarioEmail", email.value.trim());

      // Redireciona para o portfólio
      window.location.href = "portfolio.html";
    });
  }

  // Vincula o botão mostrar senha caso ele exista na página
  const btnSenha = document.getElementById("btnSenha");
  if (btnSenha) {
    // Removemos o onclick inline do HTML para usar o EventListener padrão do projeto
    btnSenha.addEventListener("click", mostrarSenha);
  }
});

// ===================== VERIFICAÇÃO DE LOGIN =====================
// Executa apenas se estivermos na página do portfólio
if (document.getElementById("usuarioLogado")) {
  const usuarioLogado = document.getElementById("usuarioLogado");
  const usuario = localStorage.getItem("usuarioEmail");

  if (!usuario) {
    window.location.href = "login.html";
  } else {
    usuarioLogado.textContent = `Usuário logado: ${usuario}`;
  }
}

// ===================== LOGOUT =====================
function logout() {
  localStorage.removeItem("usuarioEmail");
  window.location.href = "login.html";
}

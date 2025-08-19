<template>
  <div class="about-container">
    <div class="about-text">
      <h1>Olá! Eu sou a <span style="color: #7c3aed">Brenda Lopes</span></h1>
      <p>Desenvolvedora Front-end e Mobile</p>
      <p>
        Atuo com Flutter, Vue e React, desenvolvendo aplicações modernas,
        funcionais e focadas na melhor experiência do usuário.
        <br />
        Tenho experiência prática em consumo de APIs, autenticação com Firebase
        e integração de serviços em tempo real.
        <br />
        Também possuo conhecimento em JavaScript, TypeScript, Python e bancos de
        dados como MySQL e SQLite.
        <br />
        Sou apaixonada por criar soluções que conectam tecnologia e pessoas,
        sempre buscando aprendizado constante e boas práticas de
        desenvolvimento.
      </p>

      <div class="icons-grid">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
          width="50"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          width="50"
        />
        <div class="break-line"></div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
          width="50"
        />
        <div class="break-line"></div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          width="50"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          width="50"
          style="filter: brightness(0) invert(1)"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
          width="50"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
          width="50"
        />
      </div>
    </div>
    <div class="about-photo">
      <img src="/src/assets/img.png" alt="minha foto" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sobre",
};
</script>


<style scoped>
.about-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 8rem 2rem 2rem 2rem;
  margin-left: 200px;
}
.about-text {
  flex: 1;
  padding: 2rem;
}
.about-photo img {
  width: 300px;
  max-width: 90vw;
  border-radius: 20px;
  object-fit: cover;
}
.icons-grid {
  margin-top: 32px;
  background-color: #1a1a1a79;
  border-radius: 20px;
  box-shadow: 0 0 10px #7c3aed;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.break-line {
  flex-basis: 100%;
  height: 0;
}
.icons-grid i {
  font-size: 48px;
  transition: transform 0.3s ease;
}
.icons-grid i:hover {
  transform: scale(1.2);
}
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    margin-left: 0;
    text-align: center;
  }
  .about-photo img {
    margin: 0 auto;
    width: 250px;
  }
  .abot-text {
    padding: 1rem;
  }
  .icons-grid {
    padding: 1rem;
    gap: 1.5rem;
  }
  .icons-grid i {
    font-size: 36px;
  }
}
</style>
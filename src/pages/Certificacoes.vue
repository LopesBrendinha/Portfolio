<template>
   <section class="certificados-container">
    <h2>Meus Certificados</h2>
    <div class="filtro-container">
        <div class="filtro-dropdown" @click="toggleDropdown" tabindex="0" @blur="fecharDropdown">
            <div class="dropdown-header">
                {{ categoriaSelecionada === 'todos'? 'Todos os certificados' : categoriaSelecionada }}
                <span class="seta">&#9662;</span>
            </div>
            <ul v-if="dropdownAberto" class="dropdown-opcoes">
                <li @click="filtrarCategoria('todos')">Todos os certificados</li>
                <li v-for="cat in categoriasUnicas" :key="cat" @click="filtrarCategoria(cat)">{{ cat }}</li>
            </ul>
        </div>
    </div>

    <div class="certificados-grid">
        <div v-for="cert in certificadosFiltrados" :key="cert.id" class="certificado-card">
            <img :src="cert.imagem" :alt="cert.titulo"/>
            <h3>{{ cert.titulo }}</h3>
            <p>{{ cert.descricaoCurta }}</p>
            <button @click="abrirModal(cert)" class="btn-ver-mais">Ver mais</button>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal" :class="{ show: modalAberto }">
      <div class="modal-content">
        <span class="close" @click="fecharModal">&times;</span>
        <h2>{{ certificadoSelecionado?.titulo }}</h2>
        <div class="modal-body">
          <img v-if="certificadoSelecionado" :src="certificadoSelecionado.imagem" :alt="certificadoSelecionado.titulo"/>
          <p>{{ certificadoSelecionado?.descricaoCurta }}</p>
        </div>
      </div>
    </div>
   </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import certificadosJson from '../assets/certificados.json'
import type { Certificados } from '../types/Certificados';

const certificados = ref<Certificados[]>([])
const certificadosFiltrados = ref<Certificados[]>([])
const categoriaSelecionada = ref<string>('todos')
const dropdownAberto = ref<boolean>(false)
const categoriasUnicas = ref<string[]>([])

const certificadoSelecionado = ref<Certificados | null>(null)
const modalAberto = ref<boolean>(false)

const toggleDropdown = () => dropdownAberto.value = !dropdownAberto.value
const fecharDropdown = () => setTimeout(()=> dropdownAberto.value = false, 200)

const filtrarCategoria = (categoria : string) =>{
    categoriaSelecionada.value = categoria;
    certificadosFiltrados.value = categoria === "todos"
    ? certificados.value
    : certificados.value.filter(c => c.categoria === categoria);
    dropdownAberto.value = false;
};

const abrirModal = (cert: Certificados) => {
  certificadoSelecionado.value = cert
  modalAberto.value = true
}

const fecharModal = () => modalAberto.value = false

onMounted(() => {
  certificados.value = certificadosJson
  certificadosFiltrados.value = certificados.value
  categoriasUnicas.value = [...new Set(certificados.value.map(c => c.categoria))]
})
</script>

<style scoped>
.filtro-dropdown {
  position: relative;
  width: 250px;
  user-select: none;
  cursor: pointer;
  margin-bottom: 20px;
}

.dropdown-header {
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.seta {
  transition: transform 0.3s ease;
}

.filtro-dropdown:focus-within .seta {
  transform: rotate(180deg);
}

.dropdown-opcoes {
  list-style: none;
  padding: 0;
  margin: 5px 0 0;
  background-color: #000;
  border: 1px solid #7c3aed;
  border-radius: 8px;
  position: absolute;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.dropdown-opcoes li {
  padding: 12px 16px;
  border-bottom: 1px solid #7c3aed;
  transition: background-color 0.3s ease;
}

.dropdown-opcoes li:last-child {
  border-bottom: none;
}

.dropdown-opcoes li:hover {
  background-color: #7c3aed;
  color: white;
}

.filtro-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.certificados-container {
  padding: 2rem;
  color: white;
  margin-left: 200px;
}

.certificados-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.certificado-card {
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
}

.certificado-card img {
  width: 100%;
  height: 200px; 
  object-fit: cover; 
  border-radius: 8px;
  display: block;
}

button.btn-ver-mais {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #7c3aed;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

h3 {
  color: #7c3aed;
}

p {
  font-size: 14px;
  color: #ccc;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.modal.show {
  display: flex;
}

.modal-content {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  position: relative;
  color: white;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
}

.modal-body img {
  width: 100%;
  max-height: 400px; 
  object-fit: contain;
  border-radius: 8px;
  margin: 1rem 0;
}

@media (max-width: 1024px) {
  .certificados-container {
    margin-left: 120px;
  }

  .certificados-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .certificados-container {
    margin-left: 0;
    padding: 1rem;
  }

  .filtro-container {
    justify-content: center;
  }

  .filtro-dropdown {
    width: 100%;
  }

  .certificados-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .modal-content {
    padding: 1rem;
  }
}
</style>

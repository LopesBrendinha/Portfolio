import 'bootstrap-icons/font/bootstrap-icons.css'   
<template>
    <div>
        <button class="menu-toggle" @click="toggleMenu">
            <i :class="isOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
        </button>

        <aside :class="['sidebar', {open: isOpen  || isDesktop}]">
            <nav>
                <ul class="direcao">
                    <li><router-link to="/" @click="closeMenu">Sobre</router-link></li>
                    <li><router-link to="/projetos" @click="closeMenu">Projetos</router-link></li>
                    <li><router-link to="/certificacoes" @click="closeMenu">Certificações</router-link></li>
                </ul>
                <ul class="social">
                    <li><a href="https://github.com/lopesbrendinha" target="_blank"><i class="bi bi-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/brenda-lopes-levandoski/" target="_blank"><i class="bi bi-linkedin"></i></a></li>
                    <li><a href="mailto:brendalopes.unicentro@gmail.com" target="_blank"><i class="bi bi-envelope-at-fill"></i></a></li>
                </ul>
            </nav>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const isOpen = ref(false)
const isDesktop = ref(window.innerWidth > 768)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
const closeMenu = ()=>{
    if(!isDesktop.value) isOpen.value = false
}
const handleResize = () =>{
    isDesktop.value = window.innerWidth > 768
    if (isDesktop.value) isOpen.value=false
}
onMounted(()=>{
    window.addEventListener('resize', handleResize)
    handleResize()
})
onBeforeUnmount(()=>{
    window.removeEventListener('resize', handleResize)
})

</script>

<style scoped>
.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100px;
 
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1000;
    transform: translateX(0);
    transition: transform 0.3s ease;
}
.sidebar nav{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}
.sidebar ul{
    list-style: none;
    padding: 0;
}
.sidebar li{
    margin-bottom: 1.5rem;
}

.sidebar a{
    color: white;
    text-decoration: none;
    font-weight: bold;
}
.sidebar .social a{
    font-size: 1.2rem;
    transition: 0.3s ease, color 0.3s ease;
}
.sidebar .social a:hover{
    transform: scale(1.5);
    color: #7c3aed;
}
.sidebar .direcao a:hover{
    color: #7c3aed;
}

.menu-toggle{
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 2001;
    display: none;
}

@media (max-width: 768px) {
    .menu-toggle{
        display: block;
    }
    .sidebar{
        width: 150px;
        transform: translateX(-100%)
    }
    .sidebar.open{
        transform: translateX(0);
    }
}
</style>
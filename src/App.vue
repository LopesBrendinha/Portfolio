<template>
    <div class="app-container">
        <Sidebar/>
        <main class="main-content">
            <router-view/>
        </main>
    </div>
</template>

<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue';
</script>
<script setup>
import { onMounted, ref } from 'vue'
const contactos = ref([])
const cargando = ref(false)
const error = ref('')
async function cargarContactos() {
cargando.value = true
error.value = ''
try {
const respuesta = await fetch('http://localhost:3000/api/contactos')
if (!respuesta.ok) throw new Error('No se pudieron cargar los contactos')
contactos.value = await respuesta.json()
} catch (problema) {
error.value = problema.message
} finally {
cargando.value = false
}
}
onMounted(cargarContactos)
</script>
<template>
<p v-if="cargando">Cargando...</p>
<p v-else-if="error">{{ error }}</p>
<ul v-else>
<li v-for="contacto in contactos" :key="contacto.id">
{{ contacto.nombre }} - {{ contacto.correo }}
</li>
</ul>
</template>
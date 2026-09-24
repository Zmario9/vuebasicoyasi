<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios' // Recuerda instalarlo con: npm install axios

// Configuración común según la guía
const api = axios.create({ baseURL: 'http://localhost:3000/api' })

const contactos = ref([])
const cargando = ref(false)
const error = ref('')

const nuevoContacto = ref({ nombre: '', correo: '', tipo: 'Cliente' })

async function cargarContactos() {
  cargando.value = true
  error.value = ''
  try {
    // Axios interpreta la respuesta y lanza el catch si hay error HTTP
    const respuesta = await api.get('/contactos')
    contactos.value = respuesta.data
  } catch (problema) {
    error.value = problema.message
  } finally {
    cargando.value = false
  }
}

async function crearContacto() {
  try {
    const respuesta = await api.post('/contactos', nuevoContacto.value)
    contactos.value.push(respuesta.data)
    
    nuevoContacto.value = { nombre: '', correo: '', tipo: 'Cliente' }
  } catch (problema) {
    error.value = problema.message
  }
}

onMounted(cargarContactos)
</script>
<template>
  <div>
    <!-- Sección del formulario para crear el contacto -->
    <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #ccc;">
      <h3>Crear Contacto</h3>
      <div style="display: flex; gap: 10px; margin-bottom: 10px;">
        <input v-model="nuevoContacto.nombre" placeholder="Nombre" type="text" />
        <input v-model="nuevoContacto.correo" placeholder="Correo" type="email" />
        <select v-model="nuevoContacto.tipo">
          <option value="Cliente">Cliente</option>
          <option value="Proveedor">Proveedor</option>
        </select>
      </div>
      <button @click="crearContacto">Guardar Contacto</button>
    </div>

    <!-- Sección para listar los contactos existentes -->
    <h3>Lista de Contactos</h3>
    <p v-if="cargando">Cargando...</p>
    <p v-else-if="error" style="color: red;">{{ error }}</p>
    <ul v-else>
      <li v-for="contacto in contactos" :key="contacto.id">
        <strong>{{ contacto.nombre }}</strong> - {{ contacto.correo }} 
        <em>({{ contacto.tipo }})</em>
      </li>
    </ul>
  </div>
</template>
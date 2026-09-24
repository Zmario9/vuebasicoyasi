import { ref, onMounted } from 'vue';
import { movimientoService } from '@/services/erpApi';

const movimientos = ref([]);
const cargando = ref(false);
const error = ref(null);

async function cargarMovimientos() {
  cargando.value = true;
  error.value = null;

  try {
    const respuesta = await movimientoService.getAll();
    movimientos.value = respuesta.data.datos;
  } catch (err) {
    error.value = 'No se pudo conectar con el servidor. Verifica que esté encendido.';
  } finally {
    cargando.value = false;
  }
}

onMounted(cargarMovimientos);
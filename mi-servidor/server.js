import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

let contactos = [
  { id: 1, nombre: 'Ana Torres', correo: 'ana@erp.test', tipo: 'Cliente' },
  { id: 2, nombre: 'Luis Perez', correo: 'luis@erp.test', tipo: 'Proveedor' }
]

let movimientos = [
  { id: 1, concepto: 'Venta de servicios', tipo: 'Ingreso', monto: 1500 },
  { id: 2, concepto: 'Compra de insumos', tipo: 'Egreso', monto: 450 }
]

app.get('/api/contactos', (req, res) => {
  res.status(200).json(contactos)
})

app.get('/api/contactos/:id', (req, res) => {
  const contacto = contactos.find(item => item.id === Number(req.params.id))

  if (!contacto) {
    return res.status(404).json({ mensaje: 'Contacto no encontrado' })
  }

  res.status(200).json(contacto)
})

app.post('/api/contactos', (req, res) => {
  const { nombre, correo, tipo } = req.body

  if (!nombre || !correo || !tipo) {
    return res.status(400).json({ mensaje: 'nombre, correo y tipo son obligatorios' })
  }

  const nuevoContacto = {
    id: Date.now(),
    nombre,
    correo,
    tipo
  }

  contactos.push(nuevoContacto)
  res.status(201).json(nuevoContacto)
})

app.put('/api/contactos/:id', (req, res) => {
  const indice = contactos.findIndex(item => item.id === Number(req.params.id))

  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Contacto no encontrado' })
  }

  contactos[indice] = {
    id: contactos[indice].id,
    nombre: req.body.nombre,
    correo: req.body.correo,
    tipo: req.body.tipo
  }

  res.status(200).json(contactos[indice])
})

app.delete('/api/contactos/:id', (req, res) => {
  const indice = contactos.findIndex(item => item.id === Number(req.params.id))

  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Contacto no encontrado' })
  }

  contactos.splice(indice, 1)
  res.status(204).send()
})

app.get('/api/movimientos', (req, res) => {
  res.status(200).json(movimientos)
})

app.post('/api/movimientos', (req, res) => {
  const { concepto, tipo, monto } = req.body
  const montoNumerico = Number(monto)

  if (!concepto || !['Ingreso', 'Egreso'].includes(tipo) || montoNumerico <= 0) {
    return res.status(400).json({ mensaje: 'Datos de movimiento inválidos' })
  }

  const nuevoMovimiento = {
    id: Date.now(),
    concepto,
    tipo,
    monto: montoNumerico
  }

  movimientos.push(nuevoMovimiento)
  res.status(201).json(nuevoMovimiento)
})

app.listen(PORT, () => {
  console.log(`API disponible en http://localhost:${PORT}`)
})
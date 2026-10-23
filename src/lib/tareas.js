export const CLAVE_ALMACEN = 'homesync.tareas'

export const PRIORIDADES = [
    { valor: 'alta', etiqueta: 'Alta'},
    {valor: 'media', etiqueta: 'Media'},
    {valor: 'baja', etiqueta: 'Baja'}
];

export const FILTROS = [
    {valor: 'todas', etiqueta: 'Todas'},
    {valor: 'pendientes', etiqueta: 'Pendientes'},
    {valor: 'hechas', etiqueta: 'Hechas'}
];

export function crearTarea(titulo, prioridad){
    return {
        id: crypto.randomUUID(),
        titulo: titulo.trim(),
        hecha: false,
        prioridad: prioridad,
        creadaEn: Date.now()
    }
}

const VALORES_PRIORIDAD = PRIORIDADES.map((prioridad) => prioridad.valor)

export function esTareaValida(tarea) {
    return (
        typeof tarea === 'object' &&
        tarea !== null &&
        typeof tarea.id === 'string' &&
        typeof tarea.titulo === 'string' &&
        typeof tarea.hecha === 'boolean' &&
        typeof tarea.prioridad === 'string' &&
        VALORES_PRIORIDAD.includes(tarea.prioridad)
    )
}

const ORDEN_PRIORIDAD = { alta: 0, media: 1, baja: 2 }

export function ordenarTareas(tareas) {
    return [...tareas].sort((a, b) => {
        if (a.hecha !== b.hecha) {
            return a.hecha ? 1 : -1
        }

        const porPrioridad =
            ORDEN_PRIORIDAD[a.prioridad] - ORDEN_PRIORIDAD[b.prioridad]

        if (porPrioridad !== 0) {
            return porPrioridad
        }

        return b.creadaEn - a.creadaEn
    })
}
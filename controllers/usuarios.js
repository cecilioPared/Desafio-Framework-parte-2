import usuarioServices from '../services/usuario.services.js'
const log = '[usuariosController]'

class UsuariosController {

  static async crear(data) {
    const method = '[crear]'
    try {
    
      console.log(`${log}${method} intentando crear usuario.`)
      const result =  await usuarioServices.crear(data)     
      console.log(`${log}${method} usuario creado con éxito.`)
      return result
    } catch (error) {
        console.log(`${log}${method} ocurrio un error: ${error.message}`)
      throw error
    }
  }

  static async eliminarPorId(idusuario) {
    const method = 'borrarPorId'
    try {
      console.log(`${log}${method} intentando borrar usuario: ${idusuario}.`)
      await usuariosApi.eliminarPorId(idusuario)
      console.log(`${log} usuario ${idusuario} borrado con éxito.`)
    } catch (error) {
      console.error(`${log} Ah ocurrido un error: ${error.message}`)
      throw error
    }
  }
 
  static async obtenerPorId(idusuario) {
    const method = 'obtenerPorId'
    try {
        console.log(`${log}${method} intentando obtener usuario ${idusuario}.`)
      const data = await usuarioServices.obtenerPorId(idusuario)
      console.log(data);
      console.log(`${log}${method} usuario ${idusuario} encontrado con éxito.`)
      return data
    } catch (error) {
        console.log(`${log}${method} ocurrio un error: ${error.message}`)
      throw error
    }
  }

  static async obtener(query = {}) {
    const method = 'obtener'
    try {
        console.log(`${log}${method} intentando obtener usuarios.`)
      const data = await usuarioServices.obtener(query)
      console.log(`${log}${method} usuarios encontrado con éxito.`)
      console.log(data)
      return data
    } catch (error) {
        console.log(`${log}${method} ocurrio un error: ${error.message}`)
      throw error
    }
  }

  static async obtenerPorCriterio(query = {}) {
    const method = 'obtenerPorCriterio'
    try {
        console.log(`${log}${method} intentando obtener usuarios. ${query}`)
      const data = await usuarioServices.obtenerPorCriterio(query)
      console.log(`${log}${method} usuarios encontrado con éxito.`)
      console.log(data)
      return data
    } catch (error) {
        console.log(`${log}${method} ocurrio un error: ${error.message}`)
      throw error
    }
  }

}


export default UsuariosController
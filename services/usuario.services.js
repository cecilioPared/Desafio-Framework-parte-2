import {
    usuariosDao as usuariosApi    
  } from '../daos/index.js'

class UsuarioService {
      constructor() {}
      async obtenerPorCriterio(query = {}) {
            const user = await usuariosApi.obtenerPorCriterio(query)
            return user;
      }

      async crear(data) {
            const usuario = await usuariosApi.crear(data);
            return usuario;
      }
      async obtenerPorId(idusuario) {
            const usuario = await usuariosApi.obtenerPorId(idusuario)
            return usuario;
      }
}

export default new UsuarioService();
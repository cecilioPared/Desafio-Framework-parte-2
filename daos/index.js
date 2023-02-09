let usuariosDao
const persistencia = process.env.PERSISTENCIA || 'mongodb'
switch (process.env.PERSISTENCIA) {        
    case persistencia:        
        const { default: UsuariosDaoMongoDb } = await import('./usuarios/UsuariosDaoMongoDb.js')
        usuariosDao = new UsuariosDaoMongoDb()
        break        
}

export { usuariosDao }
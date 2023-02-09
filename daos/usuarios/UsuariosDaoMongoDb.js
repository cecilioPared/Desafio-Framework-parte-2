import usuario from "../../models/user.js";
import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";

class UsuariosDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super("User", usuario);
  }
}

export default UsuariosDaoMongoDb;

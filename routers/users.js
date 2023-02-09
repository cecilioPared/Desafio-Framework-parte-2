import { Router } from "express";
import UsuariosController from "../controllers/usuarios.js";
import { encryptPassword } from "../utils/handleEncrypt.js";
const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const { body } = req;
    const { email, password } = body;

    console.log("email", email);        
    const user = await UsuariosController.obtenerPorCriterio({ email });
    console.log("usuario encontrado:", user);
    if (user) {
      res
        .cookie(
          "data",
          JSON.stringify({
            mensaje: `Usuario ${email} ya se encuentra registrado.`,
            isError: true,
          }),
          { maxAge: 2000, signed: true }
        )
        .redirect("/sign-up");
      return;
    }

    const newUser = {
      ...body,
      password: encryptPassword(password),
    };
    const userResult = await UsuariosController.crear(newUser);
    res.redirect("/sign-in");
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { query = {} } = req;
    const users = await UsuariosController.obtener(query);
    res.json(users);
  } catch (error) {
    next(error);
  }
});

export default router;

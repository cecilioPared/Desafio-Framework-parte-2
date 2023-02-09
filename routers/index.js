import { Router } from "express";
import users from "./users.js";
import auth from "./auth.js";
import random from "./random.js";
const router = Router();

router.use("/users", users);
router.use("/auth", auth);
router.use("/random", random);

export default router;

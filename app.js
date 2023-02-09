import express from "express";
import session from "express-session";
import passport from "passport";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import hbs from "hbs";
import minimist from "minimist";

import router from "./routers/index.js";
import viewRouter from "./routers/view.js";

import {
  notFoundURl,
  validarRecursoMiddleware,
} from "./middlewares/loggerRouters.js";
import logger from "./utils/loggerHandler.js";
import authenticateUser from ".//middlewares/passport.js";

const app = express();
const opts = {
  default: {
    puerto: 0,
  },
  alias: {
    p: "puerto",
  },
};

const params = minimist(process.argv.slice(2), opts);
console.log("port", params.puerto);
const PORT = params.puerto || 8080;
const ENV = process.env.NODE_ENV;

authenticateUser(passport);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", hbs.__express);

app.use(cookieParser("3!$H4s5K36#s"));
app.use(
  session({
    secret: "3!$H4s5K36#s",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);
app.use("/", viewRouter);

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use("*", notFoundURl);
app.use("*", validarRecursoMiddleware);

const server = app.listen(PORT, () => {
  logger.info(
    `Servidor http esta escuchando en el puerto ${server.address().port}`
  );
  logger.info(`http://localhost:${server.address().port}`);
  logger.info(`Environment:${ENV}`);
});

server.on("error", (error) => logger.error(`Error en servidor ${error}`));

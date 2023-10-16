import { Router } from "express";
import { getFile } from "../controllers/storage";
import multerMiddleware from "../middleware/file";
// import  validateToken  from '../routes/validate-token'
import { checkJwt } from "../middleware/session";

const routerFile = Router();

routerFile.post("/", multerMiddleware.single("myfile"), getFile);

export { routerFile };

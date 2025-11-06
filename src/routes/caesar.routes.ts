import { Router } from "express";
import {
  bruteForceDecipherHandler,
  cipherHandler,
  decipherHandler,
} from "../controller/caesar.controller";

const router = Router();

router.post("/cifrar", cipherHandler);

router.post("/decifrar", decipherHandler);

router.post("/decifrarForcaBruta", bruteForceDecipherHandler);

export default router;

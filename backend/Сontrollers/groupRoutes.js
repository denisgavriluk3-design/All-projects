import express from "express";
import { getGroups } from "./groupController.js";

const router = express.Router();

router.get("/", getGroups);

export default router;

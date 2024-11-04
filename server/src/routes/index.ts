import apiRoutes from "./api/index.js";
import express from "express";

const router = express.Router();

router.use("/api", apiRoutes);

export default router;
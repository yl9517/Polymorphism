import { logger } from "@/utils/logger";
import express from "express";
import controller from "../../contoller/statement";

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    return await controller.setStatement;
  } catch (e) {
    logger.error(e);
    return res
      .status(e.message ? 400 : 500)
      .json({ message: e.message || "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    return res.status(200).json(req.body);
  } catch (e) {
    logger.error(e);
    return res
      .status(e.message ? 400 : 500)
      .json({ message: e.message || "Server Error" });
  }
});

export default router;

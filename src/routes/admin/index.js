import { logger } from "@/utils/logger";
import express from "express";

const router = express.Router();
/**
 *  @swagger
 *  /admin/:
 *    get:
 *      tags: ["Admin"]
 *      summary: Get Admins
 *      parameters:
 *        - in: query
 *          name: limit
 *          schema:
 *            type: number
 *            default: 12
 *        - in: query
 *          name: page
 *          schema:
 *            type: number
 *            default: 1
 *        - in: query
 *          name: sort
 *          description: "field name for sorting"
 *          schema:
 *            type: string
 *            default: "-createdAt"
 *      responses:
 *        200:
 *          $ref: "#/components/responses/Success"
 *        400:
 *          $ref: "#/components/responses/Error"
 *        401:
 *          $ref: "#/components/responses/AuthenticationError"
 *        404:
 *          $ref: "#/components/responses/NotFoundError"
 *        500:
 *          $ref: "#/components/responses/ServerError"
 */
router.get("/", async (req, res) => {
  try {
    return res.status(200).json({
      status: 200,
      success: true,
      message: "OK",
    });
  } catch (e) {
    logger.error(e);
    return res
      .status(e.message ? 400 : 500)
      .json({ message: e.message || "Server Error" });
  }
});
/**
 *  @swagger
 *  /admin/{_id}:
 *    get:
 *      tags: ["Admin"]
 *      summary: Get Admin
 *      parameters:
 *        - in: path
 *          name: _id
 *          required: true
 *          description: 관리자 _id
 *          schema:
 *            type: string
 *            example: 60bd9f99090602181066e1e8
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - type: object
 *                    required:
 *                      - adminId
 *                    properties:
 *                      adminId:
 *                         type: string
 *                         description: 관리자 Id
 *                      phoneNumber:
 *                        type: string
 *                        description: 관리자 연락처
 *                      address:
 *                        type: string
 *                        description: 관리자 주소
 *                  - $ref: "#/components/responses/Success"
 *        400:
 *          $ref: "#/components/responses/Error"
 *        401:
 *          $ref: "#/components/responses/AuthenticationError"
 *        404:
 *          $ref: "#/components/responses/NotFoundError"
 *        500:
 *          $ref: "#/components/responses/ServerError"
 */
router.get("/:_id", async (req, res) => {
  try {
    return res.status(200).json("");
  } catch (e) {
    logger.error(e);
    return res
      .status(e.message ? 400 : 500)
      .json({ message: e.message || "Server Error" });
  }
});

/**
 *  @swagger
 *  /admin/{_id}:
 *    post:
 *      tags: ["Admin"]
 *      summary: Create a Admin
 *      description: 관리자 한명 생성
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - adminId
 *                - password
 *                - name
 *              properties:
 *                adminId:
 *                  type: string
 *                  description: "Admin login id"
 *                  example: "admin"
 *                password:
 *                  type: string
 *                  description: "Admin login password"
 *                  example: "admin$pw"
 *                name:
 *                  type: string
 *                  description: "Admin name"
 *                  example: "kim"
 *                phoneNumber:
 *                  type: string
 *                  description: 관리자 연락처
 *                  example: "01000002222"
 *      responses:
 *        200:
 *          $ref: "#/components/responses/Success"
 *        400:
 *          $ref: "#/components/responses/Error"
 *        401:
 *          $ref: "#/components/responses/AuthenticationError"
 *        404:
 *          $ref: "#/components/responses/NotFoundError"
 *        500:
 *          $ref: "#/components/responses/ServerError"
 */
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

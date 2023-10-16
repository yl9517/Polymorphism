/**
 *  @swagger
 *  components:
 *    responses:
 *      Message:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      Success:
 *        description: successful request with no data
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example: {"status": 200, "success": true, "message": "OK"}
 *      Error:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example: {"status": 400, "success": false, "message": "Bad Request"}
 *      AuthenticationError:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example: {"status": 401, "success": false, "message": "Unauthorized"}
 *      NotFoundError:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example: {"status": 404, "success": false, "message": "Not Found"}
 *      ServerError:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example: {"status": 500, "success": false, "message": "Internal Server Error"}
 *
 */

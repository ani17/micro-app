const express = require('express');
const postController = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @openapi
 * /api/v1/post/:
 *   get:
 *     summary: Gets all posts.
 *     responses:
 *       200:
 *         description: Returns a json string.
 */
router.route("/")
    .get(postController.getAllPosts);

/**
 * @openapi
 * /api/v1/post/:
 *   post:
 *     summary: Create a new post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Post's title.
 *                 example: The Geatest Speeches
 *               description:
 *                 type: string
 *                 description: Post's description.
 *                 example: Good Post
 *     responses:
 *       201:
 *         description: Returns a json string.
*/
router.route("/")
    .post(postController.createPost);


/**
* @openapi
* /api/v1/post/{id}:
*   get:
*     summary: Retrieve a single post.
*     description: Retrieve a single post.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Numeric ID of the post to retrieve.
*         schema:
*           type: string
*     responses:
*       200:
*         description: Returns a json string.
*/
router.route("/:id")
    .get(postController.getPost);

router.route("/:id")
    .patch(protect,postController.updatePost);

router.route("/:id")
    .delete(protect,postController.deletePost);

module.exports = router;
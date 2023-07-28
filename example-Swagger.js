const express = require('express')
const router = express.Router()

const {
    read,
    list,
    create,
    update,
    remove
} = require('../Controllers/product')



//http://localhost:5000/api/product


/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     tags: [Products]
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get('/product', list)


/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Get Product by ID
 *     tags: [Products]
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get('/product/:id', read)


/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               detail:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: The created product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated product ID
 *         name:
 *           type: string
 *           description: The product name
 *         detail:
 *           type: string
 *           description: The product detail
 *         price:
 *           type: number
 *           description: The product price
 *       required:
 *         - name
 *         - price
 */
router.post('/product', create)

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Update a Product
 *     tags: [Products]
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.put('/product/:id', update)

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Delete a Product
 *     tags: [Products]
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.delete('/product/:id', remove)




module.exports = router

const express = require("express");

const {fetchClans} = require('../controllers/clanControllers')

const router = express.Router()

/**
 * @swagger
 * /api/clans:
 *   get:
 *     summary: Retrieve a list of events
 *     description: Fetch all events from the database.
 *     responses:
 *       200:
 *         description: A list of events.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The event ID.
 *                   name:
 *                     type: string
 *                     description: The event name.
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     description: The event date.
 *       500:
 *         description: Internal server error.
 */
router.get('/', fetchClans)

router.post('/')
router.patch('/')
router.delete('/')
 
module.exports = router;
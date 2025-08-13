import express from "express";
const router = express.Router();
import prisma from "../db/index.js";

// GET all games for logged-in user
router.get('/', async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const games = await prisma.game.findMany({
      where: { userId: req.user.sub },
    });

    res.status(200).json({ success: true, games });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// POST create a new game
router.post('/', async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ success: false, message: 'Request body is missing' });
  }

  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, message: 'Game name is required' });
  }

  if (!req.user) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    const newGame = await prisma.game.create({
      data: {
        name,
        description,
        completed: false,
        userId: req.user.sub,
      },
    });

    res.status(201).json({ success: true, game: newGame.id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Failed to create game' });
  }
});

export default router;

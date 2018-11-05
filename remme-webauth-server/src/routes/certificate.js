import express from 'express';
import { ObjectID } from 'mongodb';
import { getCollection } from '../functions/store';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const session = await getCollection('session');
  const { certificate } = await session.findOne({ _id: new ObjectID(id) });
  res.json({ certificate });
});

export default router;
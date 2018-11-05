import express from 'express';
import sha256 from "js-sha256";
import { verifySecret , getCollection } from "../functions";


const router = express.Router();

router.post('/', async (req, res) => {
  const {userId, token} = req.body;

  const session = await getCollection("session");
  const certificate = await session.findOne({user: userId});

  const store = await getCollection("certificates");

  const { secret } = await store.findOne({ hashOfCertificate: sha256(certificate.replace(/\r?\n?/g, "")) });
  res.status(200).json({ success: verifySecret(secret, token) });
});

export default router;
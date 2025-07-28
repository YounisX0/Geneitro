import express from 'express';
import { generateAiImage } from '../controllers/GenerateAiImage.js';

const router = express.Router();

router.post('/', generateAiImage);

export default router;
import express from 'express';
import { addBooks, readBooks } from '../controllers/libraryController.mjs';

const router = express.Router();
router.get('/lbms/books', readBooks);
router.post('/lbms/books/add', addBooks);

export default router;
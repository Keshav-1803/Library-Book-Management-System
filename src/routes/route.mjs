import express from 'express';
import { addBooks, deleteBook, readBooks, searchBook, updateBook } from '../controllers/libraryController.mjs';

const router = express.Router();
router.get('/lbms/books', readBooks);
router.post('/lbms/books/add', addBooks);
router.delete('/lbms/books/delete/:id', deleteBook);
router.put('/lbms/books/update/:id', updateBook);
router.get('/lbms/books/search', searchBook);

export default router;
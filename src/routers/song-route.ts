import express, { Router } from 'express';
// Adjust the import path as necessary
import {
  getAllSongs,
  addSong,
  updateSong,
  deleteSong,
  generateStatistics,
  toggleFavorite
} from '../controllers/stat-controller';
const router: Router = express.Router();

router.get('/', getAllSongs);
router.post('/', addSong);
router.put('/:id', updateSong);
router.delete('/:id', deleteSong);
router.get('/stat', generateStatistics);
router.patch('/:id/toggle-favorite', toggleFavorite);

export default router;

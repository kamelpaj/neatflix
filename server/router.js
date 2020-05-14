import express from 'express';
const router = express.Router();

router.get('/rentMovie', (req, res) => {
    res.send('Server here lmao :P')
});

router.get('/admin/addMovie', (req, res) => {
    res.send('Server here lmao :P')
});

router.get('/admin/deleteMovie', (req, res) => {
    res.send('Server here lmao :P')
});

router.get('/admin/getMovieInventory', (req, res) => {
    res.send('Server here lmao :P')
});

router.get('/admin/viewCurrentRentedMovies', (req, res) => {
    res.send('Server here lmao :P')
});

module.exports = router;
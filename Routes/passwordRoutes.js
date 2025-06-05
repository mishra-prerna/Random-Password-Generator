import express from 'express';
import { getPassword } from '../controllers/passwordControllers.js';

const router = express.Router();

// Render the homepage
router.get('/', (req, res) => {
    res.render('index', { error: null });
});

// Directly use the controller function for password generation
// router.get('/generate-password', getPassword);

// Handle password generation and render the result
router.get('/generate-password', (req, res) => {
    const result = getPassword(req);

    if (result.error) {
        return res.render('index', { error: result.error });
    }

    res.render('result', { password: result.password });
});

export default router;

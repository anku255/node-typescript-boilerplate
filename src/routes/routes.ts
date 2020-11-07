import { Router } from 'express';

const router = Router();

router.route('/').get((_, res) => {
	res.json('Server working fine').send();
});

router.route('/ping').get((_, res) => {
	res.json('pong').send();
});

export default router;

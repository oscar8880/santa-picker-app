import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const status = 200;
  const description = 'API for Santa Picker';
  res.status(status).json({ status, description });
});

export default router;

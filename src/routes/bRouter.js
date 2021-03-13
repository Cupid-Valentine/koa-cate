const Router = require('koa-router');
const b = require('../api//b');

const router = Router();

router.get('/b', b);

module.exports = router;

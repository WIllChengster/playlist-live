const router = require('express').Router();

router.get('/example', (req, res) => {
    res.send('hi')
})

module.exports = router;
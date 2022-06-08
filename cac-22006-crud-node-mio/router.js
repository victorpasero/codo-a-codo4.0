const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/productos', (req, res) => {
    res.render('productos/index');
});

router.get('/productos/:codigo', (req, res) => {
    // res.send('Producto: ' + req.params.codigo);
    res.render('productos/show', { codigo: req.params.codigo});
});

module.exports = router;
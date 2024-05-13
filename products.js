const express = require('express');
const {getProducts, addProduct} = require('./db/fileDB')
const router = express.Router();

router.get('/', (req, res) => {

    const messages = getProducts()

    res.status(200).send(messages)
})


router.get('/:id', (req, res) => {
    res.send(product);
});

router.post('/', (req, res) => {

    const body = req.body;

    addProduct(body)

    res.status(201).send(body)
}) 

module.exports = router
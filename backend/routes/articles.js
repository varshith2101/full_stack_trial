const article = require('../models(schemas)/article');

const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    const articles = await article.find();
    res.json(articles);
})

router.post('/', async (req,res) => {
    const article_input = req.body;
    const my_article = new article(article_input);
    try{
        await my_article.save();
        res.status(201).send("All good, saved");
    }catch(err){
        res.status(400).send(err.message);
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { handleShortenURL , handlegetRedirectURL ,handlegetAnalytics} = require("../controllers/url.js");

router.
post('/',handleShortenURL)

router.
get('/:shortId',handlegetRedirectURL)

router.get('/Analytics/:shortId',handlegetAnalytics)
module.exports = router;
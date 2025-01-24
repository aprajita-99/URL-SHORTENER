const shortid = require("shortid");
const URL = require("../models/url");

async function handleShortenURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "URL not found"});
  const shortId = shortid.generate();
  await URL.create({
    shortId : shortId,
    redirectURL: body.url,
    visitHistory:[]
  });
  return res.status(200).render("home" ,{
     shortId : shortId
  });
}

async function handlegetRedirectURL(req,res){
    const id = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId:id},{$push:{visitHistory:{timestamps : Date.now()}}});
    res.redirect(entry.redirectURL);
}

async function handlegetAnalytics(req,res){
    const body = req.body;
    const id = body.id;
    const entry = await URL.findOne({shortId:id});
    return res.status(200).render("home", {
      count : entry.visitHistory.length
    })
}

module.exports = {handleShortenURL,handlegetRedirectURL,handlegetAnalytics};
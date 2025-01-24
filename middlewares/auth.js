const { getuser } = require("../service/auth");


function checkforAuthentication(req,res,next){
}

async function RestrictToLoggedInUserOnly(req, res, next) {
    try {
        const userUid = req.cookies.uid;
        if (!userUid) {
            return res.render("LogIn", { loginError: "Please log in to continue." });
        }
        const user = await getuser(userUid);
        if (!user) {
            return res.render("LogIn", { loginError: "Session expired. Please log in again." });
        }
        req.user = user;
        next();
    } catch (err) {
        console.error("Error in RestrictToLoggedInUserOnly middleware:", err);
        return res.render("LogIn", { loginError: "An error occurred. Please try again later." });
    }
}

module.exports = RestrictToLoggedInUserOnly;




// Send an authenticated  to the given email of user for restting login password
const authenticate = async (req, res) => {
    res.status(200).json({ msg: "ok" });

};




module.exports = {

    authenticate,

};
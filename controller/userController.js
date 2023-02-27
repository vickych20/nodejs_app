const registerUser = async (req, res) => {
    if (!req.body.email) {
        res.status(400)
        throw new Error('please add an email');

     
    }
    res.send('register User')

}
module.exports = {
    registerUser,
}
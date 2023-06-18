// User authentication can be done by using sessions or tokens
// sessions require access to the database to get the user with each request
// Jwt tokens are self contained
// passwords of users should be hashed before getting stored in the database -> bcrypt.hash
// to create a jwt token we use the privateKey
// to verify it, we use the publicKey
// why use sessions or tokens ?
// http is stateless
// -> request  <- response
// -> request -> not protected (/login) -> controller -> response
// -> request -> protected -> authMiddlware -> decode jwt token -> get user id -> controller -> response
// sessions or tokens are used to keep track of who sent the request

headers: {
	authorization: "Bearer eyfgrlgotrgkortgrerth.fewigerigireogrweigofiweoigwe.gregergiqwefoewoifg";
}

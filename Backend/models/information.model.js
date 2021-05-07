import helper from "../helpers/information/helper";
const fs = require( "fs" );

const filename = "/Users/waru/Desktop/Exercise/backend/data/payments.JSON";
var user = JSON.parse( fs.readFileSync( filename ) );

const getPost = ( email ) =>
{
    console.log( "LLEGO", email )
    const findUser = helper.find( user, email );
    return findUser;
};

export default {
    getPost,
};

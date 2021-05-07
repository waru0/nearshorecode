import helper from "../helpers/loan/helper";
const fs = require( "fs" );

const filename = "/Users/waru/Desktop/Exercise/data/loan.JSON";
var user = JSON.parse( fs.readFileSync( filename ) );

const getPost = ( id ) =>
{
    const findUser = helper.find( user, id );
    return findUser;
};

const insertPost = ( newUser ) =>
{
    const id = { id: helper.getNewId( user ) };
    newUser = { ...id, ...newUser };
    const findUser = helper.findEmail( user, newUser.email );
    if ( findUser != null )
    {
        if ( findUser.amount + newUser.amount < 1000 )
        {
            let total = findUser.amount + newUser.amount;
            return `New Amount ${ total }`;
        } else
        {
            return "error:100 AMount excedeed";
        }
    } else
    {
        if ( newUser.amount > 50 )
        {
            return "error 101 First Amount Excedeed";
        } else
        {
            user.push( newUser );
            helper.writeJSONFile( filename, user );
            return `The User #${ newUser.id } has been created`, newUser;
        }
    }
};
export default {
    insertPost,
    getPost,
};

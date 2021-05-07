import helper from "../helpers/payments/helper";
const fs = require( "fs" );

const filename = "/Users/waru/Desktop/Exercise/data/payments.JSON";
//let user = require(filename)
var user = JSON.parse( fs.readFileSync( filename ) );

const getPost = ( id ) =>
{
    const findUser = helper.find( user, id );
    return findUser;
};

const insertPost = ( newUser ) =>
{
    const findUser = helper.findEmail( user, newUser.email );
    if ( findUser != null )
    {
        let total = findUser.amount - newUser.amount;
        if ( total < 0 )
        {
            return `error 100: Amount can't be greater than total debt`;
        } else
        {
            if ( total == 0 )
            {
                return "error 101 : No Debt";
            } else
            {
                return `Created Status , Your total debt is ${ total }  now`;
            }
        }
    } else
    {
        return "Email not found cannot accept";

        // user.push(newUser)
        // helper.writeJSONFile(filename, user)
        // return (newUser)
    }
};

export default {
    insertPost,
    getPost,
};

const checkFieldsPost = ( req, res, next ) =>
{
    const { email } = req.body;
    if ( email )
    {
        next();
    } else
    {
        res.status( 400 ).json( { message: "please enter an Email" } );
    }
};
export default {
    checkFieldsPost,
};

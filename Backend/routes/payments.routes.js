import { Router } from "express";
import data from "../models/payments.model";

const router = Router();

router.get( "/:id", async ( req, res ) =>
{
    const id = req.params.id;

    try
    {
        const response = await data.getPost( id );
        return res.json( response );
    } catch ( err )
    {
        if ( err.status )
        {
            res.status( err.status ).json( { message: err.message } );
        } else
        {
            res.status( 500 ).json( { message: err.message } );
        }
    }
} );

router.post( "/", async ( req, res ) =>
{
    const response = await data.insertPost( req.body );
    return res
        .status( 201 )
        .json( {
            response,
        } )
        .catch( ( err ) => res.status( 500 ).json( { message: err.message } ) );
} );
export default router;

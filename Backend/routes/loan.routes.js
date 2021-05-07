import { Router } from "express";
import data from "../models/loan.model";
import middle from "../helpers/middlewares";

const router = Router();

router.get( "/loan/:id", async ( req, res ) =>
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

router.post( "/loan", async ( req, res ) =>
{
    try
    {
        const response = await data.insertPost( req.body );
        return res.status( 201 ).json( {
            content: response,
        } );
    } catch ( err )
    {
        res.status( 500 ).json( { message: err.message } );
    }
} );
export default router;

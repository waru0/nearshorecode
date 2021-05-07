import { Router } from "express";
import data from "../models/information.model";
import middle from "../helpers/middlewares";

const router = Router();

router.get( "/:email", async ( req, res ) =>
{
    const email = req.params.email;
    try
    {
        const response = await data.getPost( email );
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

export default router;

import express from "express";
import morgan from "morgan";
import router from "./routes/index.routes";
const app = express();
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( router );
app.use( morgan( "tiny" ) );
app.get( "/", ( req, res ) =>
{
    res.json( { message: "Hello world" } );
} );
app.listen( "3000" );

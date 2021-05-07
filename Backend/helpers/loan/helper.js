import { writeFileSync } from "fs";
const getNewId = ( array ) =>
{
    if ( array.length > 0 )
    {
        return array[ array.length - 1 ].id + 1;
    } else
    {
        return 1;
    }
};
const find = ( array, id ) =>
{
    const found = array.find( ( r ) => r.id == id );

    if ( found == undefined )
    {
        return "ID is not good";
    } else
    {
        return found;
    }
};

const findEmail = ( array, email ) =>
{
    const foundEmail = array.find( ( r ) => r.email == email );

    return foundEmail;
};
const writeJSONFile = ( filename, content ) =>
{
    writeFileSync( filename, JSON.stringify( content ), "utf8", ( err ) =>
    {
        if ( err )
        {
            return err;
        }
    } );
};
export default {
    find,
    findEmail,
    getNewId,
    writeJSONFile,
};

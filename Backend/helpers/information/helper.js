import { writeFileSync } from "fs";

const find = ( array, email ) =>
{
        const found = array.find( ( r ) => r.email == email );

        if ( found == undefined )
        {
                return "";
        } else
        {
                return `OK with data amount: ${ found.amount }`;
        }
};

export default {
        find,
};

import axiosHelper from '../helpers/axiosHelper';

class InformationService
{




    create ( data )
    {

        return axiosHelper.getRequest( "http://localhost:3000/api/information/" + data.email );
    }
}

export default new InformationService();

import axiosHelper from '../helpers/axiosHelper';

class PaymentService
{
    create ( data )
    {
        return axiosHelper.postRequest( "http://localhost:3000/api/payments", data );
    }
}

export default new PaymentService();

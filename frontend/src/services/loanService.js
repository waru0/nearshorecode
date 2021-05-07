import axiosHelper from '../helpers/axiosHelper';

class LoanService
{
  create ( data )
  {
    return axiosHelper.postRequest( "http://localhost:3000/api/loan", data );
  }
}

export default new LoanService();

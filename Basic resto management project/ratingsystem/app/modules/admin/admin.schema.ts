
import {restaurnatsDetails} from '../database/Restaurant'

class AdminSchema{
    get(){
     return restaurnatsDetails
    }
}

const adminSchema=new AdminSchema
export default adminSchema
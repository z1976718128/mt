import {
    RECEIVE_USER_INFO
} from "./mutation-type"

export default{
    recordUser ({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    }
}
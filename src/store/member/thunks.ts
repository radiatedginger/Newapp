import {memberFetchError, memberFetchRequest, memberFetchSuccess} from "./actions";
import {callApi} from "../../utils/api";
import {MemberSerializer} from "./model/MemberSerializer";


export const getMembers = () => {
    return(dispatch:any) => {
        dispatch(memberFetchRequest());
        callApi('get','api/members')
            .then(res => dispatch(memberFetchSuccess(MemberSerializer.serializeFromBackend(res))))
            .catch(err => dispatch(memberFetchError(err)))
    }
}
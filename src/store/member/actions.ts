import {MemberActionTypes} from "./types";
import {action} from "typesafe-actions";
import MemberModel from "./model/MemberModel";


export const memberFetchRequest = () => action(MemberActionTypes.FETCH_REQUEST);
export const memberFetchSuccess = (payload: MemberModel[]) => action(MemberActionTypes.FETCH_SUCCESS,payload);
export const memberFetchError = (message:string)=> action(MemberActionTypes.FETCH_ERROR,message);
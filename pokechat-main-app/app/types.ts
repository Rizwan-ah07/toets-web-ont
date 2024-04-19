import { ObjectId } from "mongodb";


export interface iMessage { 
    _id? : ObjectId,
    sender: string,
    message: string
}
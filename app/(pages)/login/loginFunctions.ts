import axiosCall from "@/libs/Axios/axios";
import { signIn } from "next-auth/react";

export const loginFunctions = {

    async loginUser(dataJson: any){
        try{
            const {email, password} = dataJson;
            let result = await signIn('credentials', {
                email,
                password,
                redirect: false
            })
            return result;

        }catch (error) {
            let errorResponse = {
                isSuccess: false,
                error: error
            }
            return errorResponse;
        }

    },

}


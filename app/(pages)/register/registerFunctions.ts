import axiosCall from "@/libs/Axios/axios";

export const registerFunctions = {

    async registerUser(dataJson: any){
        try{
            const payload = dataJson;
            let result = await axiosCall(`/api/auth/register`, 'POST', null, null, payload);
            return result.data;

        }catch (error) {
            let errorResponse = {
                isSuccess: false,
                error: error
            }
            return errorResponse;
        }

    },

}


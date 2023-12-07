import axiosCall from "@/libs/Axios/axios";

export const cartFunctions = {

    async proceedToCheckout(dataJson: any){
        try{
            const payload = dataJson;
            let result = await axiosCall(`/api/stripe`, 'POST', null, null, payload);
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


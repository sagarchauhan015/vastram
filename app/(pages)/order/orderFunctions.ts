import axiosCall from "@/libs/Axios/axios";

export const orderFunctions = {

    async getOrderByEmail(dataJson: any){
        try{
            const params = dataJson;
            let result = await axiosCall(`/api/order`, 'GET', params, null, null);
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


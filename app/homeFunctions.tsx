import axiosCall from "@/libs/Axios/axios";

export const homeFunctions = {
    async getNewArrivals(){
        try{
            let result = await axiosCall(`/api`, 'GET', null, null, null);
            return result.data.data;
        }catch(error){
            let errorResponse = {
                isSuccess: false,
                error: error
            }
            return errorResponse;
        }
    }
}
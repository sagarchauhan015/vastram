import axiosCall from "@/libs/Axios/axios";

export const adminFunctions = {

    async uploadProduct(dataJson: any){
        try{
            const payload = dataJson;
            let result = await axiosCall('/api/admin', 'POST', null, null, payload);
            console.log("this is admin panel", result);
            return result.data;

        }catch (error) {
            let errorResponse = {
                isSuccess: false,
                error: error
            }
            return errorResponse;
        }

    }

}
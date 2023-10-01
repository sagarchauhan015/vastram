import axiosCall from "@/libs/Axios/axios";

export const categoryFunctions = {

    async getProductByCategory(dataJson: any){
        try{
            let result = await axiosCall(`/api/category/${dataJson.category}`, 'GET', null, null, null);
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
import axiosCall from "@/libs/Axios/axios";

export const categoryFunctions = {

    async getProductByCategory(dataJson: any){
        try{
            let result = await axiosCall(`/api/category/${dataJson.category}`, 'GET', null, null, null);
            return result.data.data;

        }catch (error) {
            let errorResponse = {
                isSuccess: false,
                error: error
            }
            return errorResponse;
        }

    },
    
    async getProductBySubCategory(dataJson: any){
        try{
            let result = await axiosCall(`/api/category/${dataJson.category}/${dataJson.subcategory}`, 'GET', null, null, null);
            return result.data;

        }catch (error) {
            let errorResponse = {
                isSuccess: false,
                error: error
            }
            return errorResponse;
        }

    },

    async getProductByFilters(dataJson: any){
        try{
            const payload = dataJson;
            let result = await axiosCall(`/api/filter`, 'POST', null, null, payload);
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
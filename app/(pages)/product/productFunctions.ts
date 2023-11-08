import axiosCall from "@/libs/Axios/axios";

export const productFunctions = {

    async getProductById(dataJson: string){
        try{
            const params = {productId: dataJson};
            let result = await axiosCall(`/api/product`, 'GET', params, null, null);
            return result.data.data[0];

        }catch (error) {
            let errorResponse = {
                isSuccess: false,
                error: error
            }
            return errorResponse;
        }

    },

}


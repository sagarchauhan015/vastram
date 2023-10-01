import { stringUtils } from "../stringUtils/stringUtils";

export const jsonUtils = {
    isEmptyorUndefined(value: any) : boolean {
        if(value === null || value === undefined || Object.keys(value).length === 0) {
            return true;
        }

        return false;
    },

    convertJsonValuestoArray(jsonData : any) : Array<any> {
        let array = [];
        for (var i in jsonData) {
            array.push(jsonData[i]);
        }
        return array;
    },

    convertArrayofObjecttoJson(data : any) : undefined | Array<any> {
        if(stringUtils.isUndefinedEmptyOrNull(data)) return undefined;

        let jsonArray = [];
        for(let values in data) {
            jsonArray.push(data[values].toJson());
        }
        return jsonArray;
    },

    convertArrayofModeltoDataArray(data : any){
        if(stringUtils.isUndefinedEmptyOrNull(data)) return undefined;

        let dataArray = []
        for(let values in data){
            dataArray.push(data[values].dataValues);
        }
        return dataArray;
    },

    isEmpty(data : any) {
        if (Object.keys(data).length === 0) {
            return true;
        }
        return false;
    },

    toString(json : any) {
        return JSON.stringify(json);
    }

};
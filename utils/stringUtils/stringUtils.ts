export const stringUtils = {
    isUndefined(data: any): boolean {
      if (data === undefined) {
        return true;
      }
  
      if (data === '' || data === null) {
        return true;
      }
  
      return false;
    },
  
    isUndefinedEmptyOrNull(data: any): boolean {
      if (data === undefined || data === '' || data === null) {
        return true;
      }
      return false;
    },
  
    isEmptyOrNull(data: any): boolean {
      if (data === '' || data === null) {
        return true;
      }
      return false;
    },
};
  
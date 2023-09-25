// @ts-nocheck
function internalServerError(error){
    this.status = "500";
    this.message = error.message;
    this.success  = false;
}

function cookieError(){
    this.status = "403";
    this.message = "Cookie Absent/Expired, Please Sign in Again";
    this.success  = false;
}

function invalidAccessToken(msg){
    this.status = "401";
    this.message = msg;
    this.success  = false;
    this.refresh = true;
}

function noAuthenticationTokenError(msg){
    this.status = "201";
    this.message = msg;
    this.success  = false;
    this.refresh = true;
}

function unAuthorizedAccess(){
    this.status = "401";
    this.message = "Unauthorized Access";
    this.success  = false;
}

function notFound(){
    this.status = "404";
    this.message = "Not Found";
    this.success  = false;
}


const errorHandler = (err,req,res,next)=>{
    let responseObj = {"message":err.message,"status":err.status,"success":err.success};
    if(err.signIn){
        responseObj = {...responseObj,"signIn":err.signIn}
    }
    if(err.refresh){
        responseObj = {...responseObj,"refresh":err.refresh}
    }
    res.status(err.status).send(responseObj)
}

module.exports = {
    internalServerError,
    cookieError,
    invalidAccessToken,
    unAuthorizedAccess,
    errorHandler
}
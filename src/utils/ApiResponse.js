class ApiResponse {
    constructor(statusCode, data, message="Success") {
        this.statusCode = statusCode;
        this.data=data;
        this.message = message;  //success or error message will be displayed to the user.
        this.sucess= statusCode<400  //  Statuscode below 400  is considered as success code 
                                    //( info message 100-200 or response ) and above 400 is considered  as failure code.
    }} 
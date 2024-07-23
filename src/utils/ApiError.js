/**
 * ApiError class extends the built-in Error class to provide a standardized
 * way to handle errors in an application.
 */
class ApiError extends Error {
    
    constructor(
      message = "An error occurred while processing the request",
      errors = [],
      statusCode
    ) {
      // Call the parent class (Error) constructor with the message parameter.
      super(message);
      
      // Store the provided HTTP status code.
      this.statusCode = statusCode;
      
      // Store the array of errors.
      this.errors = errors;
      
      // Initialize a property to store additional data about the error, default is null.
      this.data = null;
      
      // Set a success property to false, indicating the operation was not successful.
      this.success = false;
    }
  }
  
  export default ApiError;
  
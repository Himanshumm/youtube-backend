/* The asyncHandler function is a higher-order function that  helps manage errors that
 occur in asynchronous route handlers by catching them and sending
  an appropriate error response to the client. */

const asyncHandler = (fn) => async (req,res,next)=> 
{try {
 await fn(req,res,next)     
} catch (error) {
    res.status(err.code || 500 ).json({ sucess: "false", message: err.message
    })
}
}
export {asyncHandler}
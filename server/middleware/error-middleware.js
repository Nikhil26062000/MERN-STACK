

const errorMiddleware = (err,req,res,next) => {
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extraDetails = err.extraDetails || "Backend server error occur";

    return res.status(status).json({message: message, extraDetails: extraDetails});
};

module.exports =errorMiddleware;
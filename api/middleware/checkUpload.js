function checkUpload(req, res, next) {
    if (req.file) {
        next();
    } else {
        const error = new Error('Failed to upload image');
        next(error); 
    }
}

module.exports = checkUpload;

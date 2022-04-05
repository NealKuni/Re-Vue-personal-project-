const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    // instead of using diskStorage, I should try memoryStorage
    destination: (req, file, cb) => {
        cb(null, '../client/public/uploads');
    },
    filename: (req, file, cb) =>
    cb(null, file.originalname)
})



const upload = multer({storage: storage});

module.exports = {upload}
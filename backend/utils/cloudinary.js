const cloudinary = require("cloudinary").v2

exports.uploads = () => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id:result.public_id
            },{
                folder:"helo"
            })
        })
    })
}
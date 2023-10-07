import imageCompression from 'browser-image-compression'

export const CompressFile = (e, setAvatar, Avatar, alert) => {
    const file = e.target.files[0]
    if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/bmp' || file.type === 'image/webp') {
        if (file.type === 'image/png' || file.type === 'image/webp' || file.type === 'image/bmp') {
            if (file.size > 90000) {
                async function handleImageUpload(event) {
                    const imageFile = event
                    const options = {
                        maxSizeMB: 1,
                        maxWidthOrHeight: 1920,
                        useWebWorker: true,
                        initialQuality:0.7,
                        fileType:'image/jpeg'
                    }
                    try {
                        const compressedFile = await imageCompression(imageFile, options)
                        imageCompression.getDataUrlFromFile(compressedFile).then(res => setAvatar(res))
                    } catch (error) {
                        console.log(error)
                    }
                }
                handleImageUpload(file)
            } else {
                setAvatar({ ...Avatar, image: file.base64 })
            }
        } else {
            setAvatar({ ...Avatar, image: file.base64 })
        }
    } else {
        alert.success("only .jpeg,.jpg,.png, and .webp formats are allowed")
    }
}
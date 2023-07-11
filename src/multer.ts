// import multer from 'multer'

// //Configure the storage for uploaded files
// const storage = multer.diskStorage({
//   destination: "assets",
//   filename: (req, file,cb)=> {
//     cb(null,Date.now() + '-' + file.originalname); // Set the destination folder where files will be saved
//   }
// });

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, 'assets/'); // Set the destination folder where files will be saved
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, file.originalname); // Set the file name to be unique
// //   },
// // });
// // Create the multer instance
// const upload = multer({ storage: storage })

// export default upload;
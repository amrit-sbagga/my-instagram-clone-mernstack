# my-instagram-clone-mernstack

Instagram clone created using MERN stack


Pre-requisites

1 - In server module, rename sample-keys.js to key.js and modify value for key MONGO_URI with
 your mongodb connection url value and similarly value for key 'JWT_SECRET' can be modified with randomly
 generated secret value

 For mongod connection url, you can use connection string from atlas : https://cloud.mongodb.com 

 Similarly, in client folder, rename sample-keys.js to keys.js and replace key 'CLOUD_NAME' value with your cloudinary cloud name
 
 If you don't have cloudinary account, please check here : https://cloudinary.com/

2 - For starting server, cd to server folder and start node server using 'npm start'

3 - For starting client, cd to client folder and start react server using 'npm start'
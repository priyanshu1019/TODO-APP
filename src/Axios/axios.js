// import axios from "axios"
// const instance = axios.create({
//     baseURL:"http://localhost:8000/api"
// })

// export default instance
import axios from "axios";

const instance = axios.create({
    baseURL: "https://ethnus-project.onrender.com/api", // Replace with your actual base URL
    timeout: 10000,  // Adjust the timeout as per your needs
});

export default instance;

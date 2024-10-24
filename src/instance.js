import axios from "axios";


//create instance
 const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default instance
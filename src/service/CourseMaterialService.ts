import axios from "axios";
const baseURL="https://jsonplaceholder.typicode.com/posts/1";
export const getCourseMaterialDtata = async ()=>{
try {
    const response =axios.get(baseURL)
    return response.data;
} catch (err) {
    console.error(err)
}
}
export {getCourseMaterialDtata}
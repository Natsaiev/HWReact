import axios from "axios";


export const fetchPosts = async(page) => {
    try{
        const response = await axios.get(`https://66aa68ce613eced4eba8b3bc.mockapi.io/api/posts?page=${page}&limit=3`);
        return response.data;
    } catch (error){
        console.log(error);
        return false;
    }
};

export const deletePost = async (id) => {
    try{
         await axios.delete(`https://66aa68ce613eced4eba8b3bc.mockapi.io/api/posts/${id}`);
    }
    catch (error){
        console.log(error);
    }
}
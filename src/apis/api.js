import axios from "axios";

export const fetchArticles = async () => {
  try {
    const response = await axios.get(
      "https://66aa68ca613eced4eba8b3ab.mockapi.io/easyblog/articles"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

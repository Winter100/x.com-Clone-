import axios from "axios";

export const getPhotos = async (page: string) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}`
    );
    return response;
  } catch (e) {
    console.log("e", e);
  }
};

export const getIdData = async (id: string) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );

    return response;
  } catch (e) {
    console.log("e", e);
  }
};

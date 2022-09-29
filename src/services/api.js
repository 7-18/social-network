import axios from "axios";

const url = "https://dummyapi.io/data/v1/";
const app_id = { "app-id": "63348db71864e97891f83fd7" };

export const getUsers = async () => {
  const response = await axios.get(url + "user", { headers: app_id });
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(url + "user/" + id, { headers: app_id });
  return response.data;
};

export const getPosts = async () => {
  const response = await axios.get(url + "post", { headers: app_id });
  return response.data;
};

export const getPostByUser = async (id) => {
  const response = await axios.get(url + "user/" + id + "/post", {
    headers: app_id,
  });
  return response.data;
};

export const getPostsByTag = async (id) => {
  const response = await axios.get(url + "tag/" + id + "/post", {
    headers: app_id,
  });
  return response.data;
};

export const getListCommentsByPost = async (id) => {
  const response = await axios.get(url + "post/" + id + "/comment", {
    headers: app_id,
  });
  return response.data;
};
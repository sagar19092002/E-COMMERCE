import axios from "axios";
import { BASE_URL } from "@/utils/constants";

interface IApi {
  endUrl: string;
  body?: object;
  params?: object;
}

export const getApi = async ({ endUrl, params }: IApi) => {
  const accessTokenData=localStorage.getItem("accessToken")
  const accessToken=JSON.parse(accessTokenData || "");
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}${endUrl}`,
      params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response?.data;
  } catch (err) {
    return err;
  }
};

export const postApi = async ({ endUrl, body, params }: IApi) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}${endUrl}`,
      data: body,
      params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response?.data;
  } catch (err) {
    return err;
  }
};

export const putApi = async ({ endUrl, body, params }: IApi) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios({
      method: "put",
      url: `${BASE_URL}${endUrl}`,
      data: body,
      params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response?.data;
  } catch (err) {
    return err;
  }
};

export const patchApi = async ({ endUrl, body, params }: IApi) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios({
      method: "patch",
      url: `${BASE_URL}${endUrl}`,
      data: body,
      params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response?.data;
  } catch (err) {
    return err;
  }
};

export const deleteApi = async ({ endUrl, params }: IApi) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios({
      method: "delete",
      url: `${BASE_URL}${endUrl}`,
      params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response?.data;
  } catch (err) {
    return err;
  }
};

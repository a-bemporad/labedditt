export const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

export const token = localStorage.getItem("token");

export const headers = {
  headers: { Authorization: token },
};

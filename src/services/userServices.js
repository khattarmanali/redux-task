import http from "../api";

const create = (data) => {
  return http.post("/admin/seller/contact", data);
};

const userServices = {
  create,
};
export default userServices;

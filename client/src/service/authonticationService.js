import Api from "@/service/Api";
export default {
  userRegister(userRegistrationInfo) {
    return Api().post("userRegister", userRegistrationInfo);
  },
  adminRegistration(admin){
    return Api().post("adminRegistration", admin);
  },
  userLogin(userLoginInfo) {
    return Api().post("userLogin", userLoginInfo);
  },
  upload(userImage) {
    return Api().post("upload", userImage);
  },
  uploadVideo(v) {
    return Api().post("uploadVideo", v);
  },
  addNewCustomer(an){
    return Api().post("addNewCustomer", an);
  },
  getCustomers(gc){
    return Api().post("getCustomers", gc);
  },
  customerJobType(jobType){
    return Api().post(`customerJobType/${jobType}`);
  },
  customerNationality(nationality){
    return Api().post(`customerNationality/${nationality}`);
  },
  customerReligion(religion){
    return Api().post(`customerReligion/${religion}`);
  },
  customerAge(age){
    return Api().post(`customerAge/${age}`);
  },
  getBooks(getB){
    return Api().post("getBooks", getB);
  },
  addBooks(ad) {
    return Api().post("addBooks", ad);
  },  
  deleteOrder(id){
    return Api().delete(`deleteOrder/${id}`);
  },
  deleteCustomer(id){
    return Api().delete(`deleteCustomer/${id}`);
  },
  getDetailById(id,getDetail){
    return Api().post(`getDetailById/${id}`,getDetail);
  },
};
import Vue from "vue";
import Router from "vue-router";
import UserLoginPage from "@/components/UserLoginPage.vue";
import UserRegistrationPage from "@/components/UserRegistrationPage.vue";
import Services from "@/components/Services.vue";
import About from "@/components/AboutSection.vue";
import Contact from "@/components/ContactusSection.vue";
import AdminReg from "@/components/adminRegistration.vue";
import AddCustomer from "@/components/AddNewCustomer.vue";
import UpdateCustomer from "@/components/updateCustomers.vue";
import CandidateProfile from "@/components/candidateProfile.vue";
import ViewBooks from "@/components/viewBooks.vue";
import CustomerDetail from "@/components/customerDetail.vue";
import Terms from "@/components/Terms.vue";
import Index from "@/components/Index.vue";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Index
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/login_page",
      name: "login_page",
      component: UserLoginPage
    },
    {
      path: "/userRegistrationPage",
      name: "userRegistrationPage",
      component: UserRegistrationPage
    },
    {
      path: "/admin_registration",
      name: "adminRegistration",
      component: AdminReg
    },
    {
        path: "/about_us",
        name: "about",
        component: About
    },
    {
        path: "/contact_us",
        name: "contact",
        component: Contact
     },
     {
      path: "/terms_polices",
      name: "terms",
      component: Terms
   },
     {
      path: "/add_new_customer",
      name: "addBook",
      component: AddCustomer
     },
    {
      path: "/update_customer_info/:id",
      name: "updateCustomer",
      component:UpdateCustomer
    },
    {
      path: "/candidate_profile",
      name: "candidateProfile",
      component: CandidateProfile
    },
    {
      path: "/view_books",
      name: "viewBooks",
      component: ViewBooks
    },
    {
      path: "/customer_detail/:id",
      name: "customerDetail",
      component:CustomerDetail
    },
  ]
});

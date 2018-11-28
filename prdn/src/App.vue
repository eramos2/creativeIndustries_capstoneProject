<template>
  <div class="wrapper home-2">
  
   <!--<login></login>-->
   <!-- <user></user> -->
   <!-- <admin></admin> -->
   <!-- <superadmin></superadmin> -->
   <!-- <register></register> -->
    
    <!--<app-header></app-header>-->
    <header-bar
      :resources="resources"
      :authenticated="authenticated"
    >
    </header-bar>
    
    <router-view :authenticated="authenticated"></router-view>
    <footer style="padding:2rem;">
      <button
            class="btn btn-primary btn-margin"
            v-show="!authenticated"
            @click="login()">
              Log In
          </button>
          <p>test</p>
          <button
            class="btn btn-primary btn-margin"
            v-show="authenticated"
            @click="logout()">
              Log Out
          </button>
          <button
            class="btn btn-primary btn-margin"
            v-show="!authenticated"
            @click="register()">
              Register
          </button>
          </footer>
    <!--
    <slider
      :resources="resources"
    >
    </slider>
    <resources-lists></resources-lists>-->
    <!--<breadcrumbs></breadcrumbs>
    <category-list 
      class="shop"
      :resources="resources"

    >
    </category-list>-->

    
    
    <!--<side-bar :sideBarItems="sideBarItems"></side-bar>-->
    
  </div>
</template>



<script>
//import SideBar from "./components/SideBar.vue";
//import AppHeader from "./components/header/AppHeader.vue";
import Header from "./components/header/Header.vue";
//import MainMenu from "./components/header/MainMenu.vue";
import Slider from "./components/slider/Slider.vue";
import ResourcesList from "./components/resourcesList/ResourcesList.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import CategoryList from "./components/lists/CategoryList.vue";
import { mapActions } from "vuex";
import Admin from "./pages/Admin.vue";

export default {
  name: "app",
  data() {
    return {
      sideBarItems: ["This is a test"],
      resources: {
        materials: {
          name: "Materials",
          categories: {
            concrete: {
              name: "Concrete",
              subcategories: [
                "Digital Concrete",
                "Foam Aggregate",
                "Geometrical Concrete",
                "Insulate Concrete",
                "Lightweight Concrete",
                "Translucent Concrete"
              ]
            },
            fabrics: {
              name: "Fabrics",
              subcategories: ["Carbon Fiber", "Cotton", "Fiberglass", "Leather"]
            },
            glassAndCeramics: {
              name: "Glass and Ceramics",
              subcategories: [
                "Blowing Glass",
                "Bulletproof",
                "Ceramic",
                "Laminate Glass",
                "Temper Glass"
              ]
            },
            metal: {
              name: "Metal",
              subcategories: [
                "Aluminium",
                "Copper",
                "Rare Metal (Medicinal)",
                "Stainless Steel",
                "Steel",
                "Zinc"
              ]
            },
            papersCoating: {
              name: "Papers Coating and Surfaces",
              subcategories: ["Packaging"]
            },
            plastics: {
              name: "Plastics",
              subcategories: [
                "Acrylic",
                "Bakelite",
                "Nylon",
                "Polycarbonate",
                "Polyester",
                "Polypropylene",
                "Polythene",
                "Prototype",
                "PVC"
              ]
            },
            rubber: {
              name: "Rubber",
              subcategories: [
                "Latex",
                "Neoprene",
                "Nitrile",
                "Recycled Tire",
                "Silicone"
              ]
            },
            wood: {
              name: "Wood",
              subcategories: [
                "Bamboo Panels",
                "Ceder",
                "Furniture Products",
                "Mahogany",
                "Marine Performance",
                "Oak",
                "Pine",
                "Saw Mill",
                "Wood Craft"
              ]
            }
          }
        },
        processes: {
          name: "Processes",
          categories: {
            engraving: {
              name: "Engraving",
              subcategories: [
                "CNC Engraving",
                "Laser Engraving",
                "Prefabricated Panels",
                "Sand Blasted"
              ]
            },
            extrusion: {
              name: "Extrusion",
              subcategories: [
                "Extrusion Bowl Making",
                "Metal Extrusion",
                "Plastic Extrusion"
              ]
            },
            fabricMachinery: {
              name: "Fabric Machinery",
              subcategories: ["Industrial Sewing"]
            },
            geometricalPrecisionCutting: {
              name: "Geometrical Precision Cutting",
              subcategories: [
                "CNC 3 Axis Milling",
                "CNC 5 Axis Milling",
                "CNC Drilling",
                "CNC Foam",
                "CNC Metal",
                "CNC Wood",
                "Laser Cutting",
                "Plasma Cutter",
                "Precision Machinery",
                "Punching",
                "Water Jet"
              ]
            },
            handMade: {
              name: "Hand Made",
              subcategories: ["Ceramic Sampler", "Fabric Patterns"]
            },
            metalWorkshop: {
              name: "Metal Workshop",
              subcategories: ["Forming and Shaping", "Metal Casting"]
            },
            molding: {
              name: "Molding",
              subcategories: [
                "Car Mold Making",
                "Hand Molding",
                "Injection Molding",
                "Pressure Molding",
                "Thermo Forming",
                "Vacuum Former"
              ]
            },
            rapidPrototype: {
              name: "Rapid Prototype",
              subcategories: ["3D Printing"]
            },
            welding: {
              name: "Welding",
              subcategories: ["Arc Welding", "Tig Welding"]
            }
          }
        },
        services: {
          name: "Services",
          categories: {
            cleaning: {
              name: "Cleaning",
              subcategories: ["Warehouse Cleaning"]
            },
            extraction: {
              name: "Extraction",
              subcategories: ["Concrete Extraction"]
            },
            prototype: {
              name: "Prototype",
              subcategories: [
                "Industrial Welders",
                "Mold Makers",
                "Precision Welding"
              ]
            },
            roofSealing: {
              name: "Roof Sealing",
              subcategories: ["Hydro Stop"]
            }
          }
        }
      }
    };
  },
  components: {
    headerBar: Header,
    slider: Slider,
    resourcesLists: ResourcesList,
    breadcrumbs: Breadcrumbs,
    categoryList: CategoryList,
    admin: Admin
  },
  methods: {
    ...mapActions(["setResources"]),
    register() {
      let userData = {
        email: "emmanuel.ramosrios@gmail.com",
        password: "12345678",
        firstName: "registerTest",
        lastName: "registerTest",
        occupation: "test",
        birthday: "1991-10-10",
        city: "testCity"
      };
      console.log("Registering user");
      console.log(userData);
      this.$store.dispatch("registerNewUser", userData);
      // this.$store.dispatch("registerUser", {
      //   email: "emmanuel.ramos2@upr.edu",
      //   password: "12345678"
      // });
    },
    login() {
      this.$store.dispatch("loginUser", {
        email: "emmanuel.ramos2@upr.edu",
        password: "12345678"
      });
    },
    logout() {
      // To delete a cookie use
      this.$cookie.delete("userId");
      this.$cookie.delete("userType");
      this.$store.dispatch("userType");
      //this.$store.state.users.userFlags.loggedIn = false;
      console.log("Logged Out");
      console.log(this.$store.state.users.userFlags.loggedIn);
    }
  },
  computed: {
    authenticated() {
      //console.log(this.$cookie.get("userId"));
      return this.$store.state.users.userFlags.loggedIn; //this.$cookie.get("userId") === "31";
    }
  },
  mounted() {
    //Check if user is logged in
    this.setResources();
    //console.log("inside App.vue after setting resources");
    //console.log(this.$store.state.resources);

    $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      if (scroll < 265) {
        $(".sticky-header").removeClass("sticky");
      } else {
        $(".sticky-header").addClass("sticky");
      }
    });
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900");

html,
body {
  height: 100%;
}

.floatleft {
  float: left;
}

.floatright {
  float: right;
}

.alignleft {
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
}

.alignright {
  float: right;
  margin-left: 15px;
  margin-bottom: 15px;
}

.aligncenter {
  display: block;
  margin: 0 auto 15px;
}

a:focus {
  outline: 0px solid;
}

img {
  max-width: 100%;
  height: auto;
}

.fix {
  overflow: hidden;
}

p {
  margin: 0 0 15px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 10px;
  color: #2c2c2c;
  line-height: 1.35;
}

a {
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  color: #2c2c2c;
}

a:hover {
  color: #0879c9;
  text-decoration: none;
}

a:active,
a:hover {
  outline: 0 none;
}

button:focus,
input:focus,
textarea:focus {
  outline: none;
}

ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}

.clear {
  clear: both;
}

body {
  color: #222;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857;
}

.ptb-10 {
  padding: 10px 0;
}

.ptb-20 {
  padding: 20px 0;
}

.ptb-30 {
  padding: 30px 0;
}

.ptb-40 {
  padding: 40px 0;
}

.ptb-50 {
  padding: 50px 0;
}

.ptb-60 {
  padding: 60px 0;
}

.ptb-70 {
  padding: 70px 0;
}

.ptb-90 {
  padding: 90px 0;
}

.pb-10 {
  padding-bottom: 10px;
}

.pb-20 {
  padding-bottom: 20px;
}

.pb-30 {
  padding-bottom: 30px;
}

.pb-50 {
  padding-bottom: 50px;
}

.pb-60 {
  padding-bottom: 60px;
}

.pt-60 {
  padding-top: 60px;
}

.mtb-20 {
  margin: 20px 0;
}

.mtb-30 {
  margin: 30px 0;
}

.mtb-40 {
  margin: 40px 0;
}

.mtb-50 {
  margin: 50px 0;
}

.mtb-60 {
  margin: 60px 0;
}

.mtb-70 {
  margin: 70px 0;
}

.mtb-80 {
  margin: 80px 0;
}

.mt-10 {
  margin: 10px 0 0 0;
}

.mt-20 {
  margin: 20px 0 0 0;
}

.mt-30 {
  margin: 30px 0 0 0;
}

.mt-40 {
  margin: 40px 0 0 0;
}

.mt-50 {
  margin: 50px 0 0 0;
}

.mt-60 {
  margin: 60px 0 0 0;
}

.mb-20 {
  margin: 0 0 20px 0;
}

.mb-30 {
  margin: 0 0 30px 0;
}

.mb-60 {
  margin: 0 0 60px 0;
}

.mb-80 {
  margin: 0 0 80px 0;
}

.mb-90 {
  margin: 0 0 90px 0;
}

.bg-gray {
  background: #f5f7fa;
}

.bg-blue {
  background: #0879c9;
}

.bg-white {
  background: #fff;
}

.bg-black {
  background: #232f3e;
}

.bg-orange {
  background: #ff6a00;
}

.bg-yellow {
  background: #ffc833;
}

.bg-brown {
  background: #e54545;
}

#scrollUp {
  background: #333333 none repeat scroll 0 0;
  bottom: 30px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  height: 40px;
  line-height: 38px;
  right: 20px;
  text-align: center;
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  width: 40px;
}

#scrollUp:hover {
  background: #0879c9;
}

.dropdown-toggle::after {
  display: none;
}
/* Carlos Pull request Style.css */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

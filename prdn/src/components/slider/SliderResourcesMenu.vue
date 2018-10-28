<template>
    <div class="sub-col col-lg-3 d-md-hide d-xs-hide">
        <div class="all-categories-menu-2 ">
            <div class="categories-toggler-menu">
                <span> All Categories </span>
            </div>
            <div class="vertical-menu-list">
                <ul>
                    <category-menu
                        v-for="(resource, index) in resources"
                        :key="index"
                        :resource="resource"
                    >
                        {{resource.name}}
                    </category-menu>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import SliderCategoriesMenu from "./SliderCategoriesMenu.vue";

export default {
  data: function() {
    return {
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
    categoryMenu: SliderCategoriesMenu
  }
};
</script>

<style>
.categories-toggler-menu {
  background: #e64545 none repeat scroll 0 0;
  color: #ffffff;
  padding: 15px 20px;
  position: relative;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
}

.vertical-menu-list {
  background: #ffffff none repeat scroll 0 0;
  border-color: #eaecee;
  border-style: none solid solid;
  border-width: 0 1px 1px;
  display: block;
  padding: 20px 0 20px 10px;
}

.vertical-menu-list ul li {
  display: block;
  position: relative;
}

.vertical-menu-list ul li a {
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 5px 20px 5px 10px;
  text-transform: none;
  display: block;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.vertical-menu-list ul li a span {
  float: right;
}

.vertical-menu-list ul li a:hover {
  color: #222222;
  background: #e9eaef;
}

.vertical-menu-list ul li .right-sub-menu,
.vertical-menu-list ul li .right-sub-menu li ul.right-threed-sub,
.vertical-menu-list ul li .right-mega-menu {
  background: #fff;
  border: 1px solid #eaecee;
  box-shadow: 1px 2px 4px 0.28px rgba(0, 0, 0, 0.07);
  left: 100%;
  position: absolute;
  top: 5px;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 200px;
  z-index: 99;
  padding: 0;
  visibility: hidden;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  z-index: 9;
}

.vertical-menu-list ul li .right-sub-menu li {
  position: relative;
}

.vertical-menu-list ul li .right-sub-menu li a {
  padding: 5px 15px;
}

.vertical-menu-list ul li .right-sub-menu li a:hover {
  background: none;
  color: #0879c9;
}

.vertical-menu-list ul li:hover .right-sub-menu,
.vertical-menu-list ul li .right-sub-menu li:hover ul.right-threed-sub,
.vertical-menu-list ul li:hover ul.right-mega-menu {
  visibility: visible;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  top: 0;
}

.vertical-menu-list ul li .right-sub-menu li ul.right-threed-sub {
  width: 90px;
}

.vertical-menu-list ul li .right-mega-menu {
  padding: 15px 5px 20px;
  width: 530px;
}

.vertical-menu-list ul li .right-mega-menu li {
  float: left;
  padding: 0 15px;
  width: 50%;
}

.vertical-menu-list ul li .right-mega-menu li a {
  color: #0879c9;
  font-size: 15px;
  font-weight: 600;
  padding: 0;
  margin: 10px 0;
}

.vertical-menu-list ul li .right-mega-menu li a:hover {
  text-decoration: underline;
  background: none;
}

.vertical-menu-list ul li .right-mega-menu li ul li {
  display: block;
  padding: 0;
  width: 100%;
}

.vertical-menu-list ul li .right-mega-menu li ul li > a {
  color: #333333;
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  padding: 0;
}

.vertical-menu-list ul li .right-mega-menu li ul li > a:hover {
  background: none;
  color: #0879c9;
  text-decoration: none;
}

.vertical-menu-list ul li .right-mega-menu li.menu-benner-image {
  margin-top: 20px;
  width: 100%;
}

.categories-more-less {
  cursor: pointer;
}

.vertical-menu-list li a.more-default,
.vertical-menu-list li a.less-show {
  color: #0879c9;
}

.vertical-menu-list li a.more-default:hover,
.vertical-menu-list li a.less-show:hover {
  color: #0879c9;
}

.hide-child,
.vertical-menu-list ul li a.less-show {
  display: none;
}

.vertical-menu-list ul li.rx-change a.less-show {
  display: block;
}

.vertical-menu-list ul li.rx-change a.more-default {
  display: none;
}

.vertical-menu-list li.hide-child {
  display: none;
}

.vertical-menu > span {
  background: #f2f2f2 none repeat scroll 0 0;
  color: #363636;
  cursor: pointer;
  display: block;
  font-family: "lato", sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  padding-left: 45px;
  position: relative;
  text-transform: uppercase;
}

.all-categories-menu-2 .categories-toggler-menu {
  background: #ffffff none repeat scroll 0 0;
  color: #ff6a00;
}

.all-categories-menu-2 .vertical-menu-list {
  border: none;
  padding: 0 0 10px 10px;
}

.all-categories-menu-2 .vertical-menu-list ul li .right-sub-menu li a:hover {
  color: #ff6a00;
}

.all-categories-menu-2 .vertical-menu-list ul li .right-mega-menu li a {
  color: #ff6a00;
}

.all-categories-menu-2 .vertical-menu-list ul li .right-mega-menu li a:hover {
  color: #ff6a00;
  text-decoration: underline;
}

.all-categories-menu-2
  .vertical-menu-list
  ul
  > li
  .right-mega-menu
  li
  ul
  li
  > a {
  color: #333333;
}

.all-categories-menu-2
  .vertical-menu-list
  ul
  li
  .right-mega-menu
  li
  ul
  li
  > a:hover {
  color: #ff6a00;
  text-decoration: none;
}

.all-categories-menu-2 .vertical-menu-list li a.more-default,
.all-categories-menu-2 .vertical-menu-list li a.less-show {
  color: #ff6a00;
}
</style>



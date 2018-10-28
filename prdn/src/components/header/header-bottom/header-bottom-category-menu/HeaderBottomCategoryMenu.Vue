<template>
    <div  class="col-xl-3 col-lg-3 hidden-md hidden-sm pull-left category-wrapper">
        <div class="category-menu">
        <span class="category-title">Resources</span>
        <nav>
            <ul class="category-menu-list menu-hidden">
                <header-bottom-category-menu-entry 
                  v-for="(resource, index) in resources"
                  :key="index"
                  :resource="resource"
                >
                  {{resource.name}}
                </header-bottom-category-menu-entry>
            </ul>
        </nav>
        </div>
    </div>
</template>

<script>
import HeaderBottomCategoryMenuEntry from "./HeaderBottomCategoryMenuEntry.vue";

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
    headerBottomCategoryMenuEntry: HeaderBottomCategoryMenuEntry
  }
};
</script>

<style>
.category-wrapper {
  max-width: 16.67%;
}

.category-menu {
  background: #16b8f6 none repeat scroll 0 0;
  border-radius: 5px 5px 0 0;
  position: relative;
}

.category-menu > span::after {
  content: "";
  font-family: "Ionicons";
  font-size: 27px;
  font-weight: normal;
  left: 20px;
  position: absolute;
}

.category-menu > span > i {
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.category-menu-list > li > a i {
  position: absolute;
  right: 0;
  top: 13px;
}

.category-menu > span {
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  line-height: 58px;
  margin-left: 50px;
  text-transform: uppercase;
}

.category-menu-list {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: #ffffff none repeat scroll 0 0;
  border-color: #ededed;
  border-image: none;
  border-style: solid;
  border-width: 0 1px 1px;
  left: 0;
  padding: 10px 0;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 99;
}

.category-menu-list li {
  position: relative;
}

.category-menu-list > li a {
  background: #ffffff none repeat scroll 0 0;
  color: #2c2c2c;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 5px 20px;
  position: relative;
  text-transform: capitalize;
}

.category-menu-list li span {
  display: inline-block;
  margin-right: 10px;
  width: 30px;
}

.category-menu-list > li a {
  color: #2c2c2c;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  overflow-wrap: break-word;
  text-transform: capitalize;
}

ul {
  list-style: outside none none;
}

.category-menu-list .ht-dropdown::before {
  background-color: #ffffff;
  border-color: #f1f1f1 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #f1f1f1;
  border-image: none;
  border-style: solid;
  border-width: 1px;
  content: "";
  display: block;
  height: 15px;
  left: -8px;
  position: absolute;
  top: 15px;
  transform: rotate(-45deg);
  width: 15px;
}

.category-menu-list .ht-dropdown {
  display: flex;
}

.category-menu-list li {
  position: relative;
}
</style>

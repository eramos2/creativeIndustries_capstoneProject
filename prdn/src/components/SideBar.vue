<template>
    <div class="wrapper">
        <nav id="sidebar" class="btn-group-vertical dropright">
            
            
               
                <button 
                    type="button" 
                    id="dropdownMenuButton" 
                    class="btn btn-secondary dropdown-toggle" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    data-reference="parent"
                >
                    Materials
                </button>

                <div 
                    class="dropdown-menu" 
                    aria-labelledby="dropdownMenuButton"

                >
                    <a class="dropdown-item" href="#">Concrete</a>
                    <a class="dropdown-item" href="#">Fabrics</a>
                    <a class="dropdown-item" href="#">Glass and Ceramics</a>
                </div>
            
            <div class="btn-group dropright">
                <button 
                    type="button" 
                    id="processesDropdownMenuButton" 
                    class="btn btn-secondary dropdown-toggle" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    data-reference="parent"
                    
                >
                    Processes
                </button>
                <div 
                    class="dropdown-menu" 
                    aria-labelledby="processesDropdownMenuButton"
                >
                    <a class="dropdown-item" href="#">Engraving</a>
                    <a class="dropdown-item" href="#">Extrusion</a>
                    <a class="dropdown-item" href="#">Fabric Machinery</a>
                </div>
            </div>


           

            <div class="dropright">
                <a 
                    type="button" 
                    id="processesDropdownMenuButton" 
                    class="btn btn-secondary dropdown-toggle" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    data-reference="#sidebar"
                    
                >
                    Processes
                </a>
                <div 
                    class="dropdown-menu" 
                    aria-labelledby="processesDropdownMenuButton"
                >
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        

        </nav>
        <side-bar-item 
            v-for="(barItem, index) in sideBarItems"
            :key="index"
        >
                {{ barItem }}
        </side-bar-item>
    </div>
</template>

<script>
import SideBarItem from "./SideBarItem.vue";

export default {
  props: ["sideBarItems"],
  components: {
    sideBarItem: SideBarItem
  }
};
</script>


<style scoped>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

.dropright {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}
ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}
a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
}
</style>

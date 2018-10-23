<template>
    <div class="wrapper">
        <nav id="sidebar">
            <ul class="list-unstyled components">
            
            <div class="dropright">
               
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropright
  </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
                
            </div>
            <li>
                <a href="#">Services</a>
            </li>
            <li class="dropright">
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle">Processes</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Businesses</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>

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

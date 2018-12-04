<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="container listContainer">
      <div class="row addMarginTop">
        <h2>
          <span class="glyphicon glyphicon-edit marginTop"></span> Edit Process Connections
        </h2>
      </div>

      <div id="error"></div>
      <div>
        <div class="row">
          <div class="col-md-6 categoryList">
            <!-- Process Categories -->
            <h5>Processes</h5>
            <div>
              <select
                class="form-control"
                id="editProcTypes"
                @change="onChange()"
                v-model="selected"
              >
                <option value="none" disabled selected>Choose One Process</option>
                <optgroup v-for="(category, key) in processes" :key="key" :label="category.name">
                  <option
                    v-for="(subcategory, subcatKey) in category.subcategories"
                    :key="subcatKey"
                    :value="subcategory.id"
                  >{{subcategory.name}}</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>

        <div class="row" id="material-service-connection">
          <div class="col-md-6 categoryList">
            <h3>Materials Connections</h3>
          </div>
          <div class="col-md-6 categoryList">
            <h3>Services Connections</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 categoryList">
            <div style="overflow-y: scroll; height:400px;">
              <ul class="list-group navList" id="editProcMatCons">
                <div v-for="(category, key) in materials" :key="key">
                  <li class="input-group" name="process" :value="category.id">
                    <strong>{{category.name}}</strong>
                  </li>
                  <li
                    v-for="(subcategory, subcatKey) in category.subcategories"
                    :key="subcatKey"
                    class="catMargins"
                  >
                    <div class="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="subMaterial"
                          v-model="smids"
                          :value="subcategory.id"
                        >
                        {{subcategory.name}}
                      </label>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div class="col-md-6 categoryList">
            <div style="overflow-y: scroll; height:400px;">
              <h5>Services Connections</h5>
              <ul class="list-group navList" id="editProcServCons">
                <div v-for="(category, key) in services" :key="key">
                  <li class="input-group" name="service" :value="category.id">
                    <strong>{{category.name}}</strong>
                  </li>
                  <li
                    v-for="(subcategory, subcatKey) in category.subcategories"
                    :key="subcatKey"
                    class="catMargins"
                  >
                    <div class="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="subService"
                          v-model="ssids"
                          :value="subcategory.id"
                        >
                        {{subcategory.name}}
                      </label>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-lg-4 col-sm-6 buttonMargin">
            <p>
              <!-- Modal Windows -->
              <button>Edit Process</button>
              <b-modal
                v-model="modalShow"
                id="modal-center"
                @ok="okModal"
                ok-only
                centered
                title="Added"
              >
                <p class="my-4">The process was edited.</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                ok-only
                v-model="modalShowFail"
                id="modal-center"
                centered
                title="ERROR"
              >
                <p class="my-4">Try Again</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                ok-only
                v-model="modalShowCred"
                id="modal-center"
                centered
                title="ERROR"
              >
                <p class="my-4">Something went wrong!</p>
              </b-modal>
            </p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      ssids: [],
      smids: [],
      selected: "",
      modalShow: false,
      modalShowFail: false,
      modalShowCred: false
    };
  },
  methods: {
    /**
     * Validate the data inserted using Vee-Validate
     * @return modal with a notification
     */
    validateBeforeSubmit: function(e) {
      e.preventDefault();
      let data = {
        resource: "processes",
        mid: this.smids,
        sid: this.ssids,
        pid: this.selected
      };
      if (this.selected == "") {
        alert("Select a Material");
      } else
        this.$store
          .dispatch("changeSubResourceConnection", data)
          .then(response => {
            if (response > 0) {
              this.reloadResources();
              return { modalShow: true, modalShowCred: false };
            } else {
              return { modalShow: false, modalShowCred: true };
            }
          })
          .then(response => {
            this.modalShow = response.modalShow;
            this.modalShowCred = response.modalShowCred;
          });
      this.$validator.reset();
      return;
    },
    okModal() {
      this.$router.replace("/admin/edit");
    },
    reloadResources() {
      this.$store.dispatch("setResources");
    },
    onChange() {
      let data = { category: "proc", subcategoryId: this.selected };
      this.$store.dispatch("getRelatedMaterials", data).then(response => {
        this.smids = [];
        for (let tagId in response) {
          this.spids.push(response[tagId].subMaterialId);
        }
      });
      this.$store.dispatch("getRelatedServices", data).then(response => {
        this.ssids = [];
        for (let tagId in response) {
          this.ssids.push(response[tagId].subServiceId);
        }
      });
    }
  },
  computed: {
    materials() {
      return this.$store.state.resources.resources.materials.categories;
    },
    processes() {
      return this.$store.state.resources.resources.processes.categories;
    },
    services() {
      return this.$store.state.resources.resources.services.categories;
    }
  }
};
</script>
<style>
#material-service-connection {
  margin-top: 2rem;
}
</style>

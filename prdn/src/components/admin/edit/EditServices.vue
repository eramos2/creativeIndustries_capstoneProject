<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="container listContainer">
      <div class="row addMarginTop">
        <h2>
          <span class="glyphicon glyphicon-edit marginTop"></span> Edit Service Connections
        </h2>
      </div>

      <div id="error"></div>
      <div>
        <div class="row">
          <div class="col-md-6 categoryList">
            <!-- Services Categories -->
            <h5>Services</h5>
            <div>
              <select
                class="form-control"
                id="editServTypes"
                @change="onChange()"
                v-model="selected"
              >
                <option value="none" disabled selected>Choose One Service</option>
                <optgroup v-for="(category, key) in services" :key="key" :label="category.name">
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
            <h3>Processes Connections</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 categoryList">
            <div style="overflow-y: scroll; height:400px;">
              <ul class="list-group navList" id="editServMatCons">
                <div v-for="(category, key) in materials" :key="key">
                  <li class="input-group" name="material" :value="category.id">
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
              <ul class="list-group navList" id="editServProcCons">
                <div v-for="(category, key) in processes" :key="key">
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
                          name="subProcess"
                          v-model="spids"
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
              <button>Edit Services</button>
              <b-modal
                v-model="modalShow"
                id="modal-center"
                @ok="okModal"
                ok-only="true"
                centered
                title="Added"
              >
                <p class="my-4">The Service was edited.</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                ok-only="true"
                v-model="modalShowFail"
                id="modal-center"
                centered
                title="ERROR"
              >
                <p class="my-4">Try Again</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                ok-only="true"
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
      <!-- </form> -->
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      spids: [],
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
        resource: "services",
        sid: this.selected,
        mid: this.smids,
        pid: this.spids
      };
      this.$store
        .dispatch("changeSubResourceConnection", data)
        .then(response => {
          if (response.length > 0) {
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
    /**
     * Redirect the Admin to the Edit tab in the Admin console
     */
    okModal() {
      this.$router.replace("/admin/edit");
    },
    onChange() {
      let data = { category: "serv", subcategoryId: this.selected };
      this.$store.dispatch("getRelatedProcesses", data).then(response => {
        this.spids = [];
        for (let tagId in response) {
          this.spids.push(response[tagId].subProcessId);
        }
      });
      this.$store.dispatch("getRelatedMaterials", data).then(response => {
        this.smids = [];
        for (let tagId in response) {
          this.smids.push(response[tagId].subMaterialId);
        }
      });
    },
    reloadResources() {
      this.$store.dispatch("setResources");
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

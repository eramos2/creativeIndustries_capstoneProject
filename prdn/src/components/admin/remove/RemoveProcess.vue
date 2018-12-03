<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="container listContainer">
      <div class="row">
        <div class="col-md-12 cpl-md-offset-4" id="topRow">
          <h2>
            <span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Processes
          </h2>

          <p class="lead">Select the processes you want to remove from the system.</p>

          <div style="overflow-y: scroll; height:400px;">
            <ul class="list-group categoryFont" id="processList">
              <div v-for="(category, key) in processes" :key="key">
                <li class="input-group" name="processes" :value="category.id">
                  <strong>{{category.name}}</strong>
                </li>
                <li
                  v-for="(subcategory, subcatKey) in category.subcategories"
                  :key="subcatKey"
                  class="catMargins"
                >
                  <div class="radio">
                    <label>
                      <input type="radio" name="subProcess" v-model="spid" :value="subcategory.id">
                      {{subcategory.name}}
                    </label>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-lg-4 col-sm-6 buttonMargin">
            <p>
              <!-- Modal Windows -->
              <!-- <button >Edit Material</button> -->
              <button :disabled="errors.any()" type="submit">Remove Process</button>
              <b-modal
                v-model="modalShow"
                id="modal-center"
                @ok="okModal"
                ok-modal
                centered
                title="Added"
              >
                <p class="my-4">The process was removed.</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                ok-modal
                v-model="modalShowFail"
                id="modal-center"
                centered
                title="ERROR"
              >
                <p class="my-4">Try Again</p>
              </b-modal>
              <b-modal
                ok-variant="danger"
                ok-modal
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
      spid: "",
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
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            resource: "processes",
            subprocessId: this.spid
          };
          if (this.spid == "") {
            this.modalShowFail = true;
          } else {
            this.$store
              .dispatch("removeSubResource", data)
              .then(response => {
                console.log(response);
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
            this.spid = "";
            return;
          }
        } else {
          //Invalid or Empty fields
          this.modalShowFail = true;
        }
      });
    },
    /**
     * Redirect the Admin to the admin console
     */
    okModal() {
      this.$router.replace("/admin/remove");
    },
    reloadResources() {
      this.$store.dispatch("setResources");
    }
  },
  computed: {
    processes() {
      return this.$store.state.resources.resources.processes.categories;
    }
  }
};
</script>
<style>
</style>

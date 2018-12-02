<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="container">
      <form>
        <div class="container adminRemove marginTop">
          <h2>
            <span class="glyphicon glyphicon-minus-sign"></span> Remove Administrator
          </h2>
          <div class="row"></div>
          <p class="lead">Select the administrator to remove.</p>
          <div class="row"></div>
        </div>

        <div class="row">
          <!-- </form> -->
          <div class="form-group col-md-6">
            <select class="form-control" v-model="selected" id="tagTypes">
              <option value="none" disabled selected>Administrators</option>

              <!-- Tag Categories -->
              <option
                v-for="(administrator,key) in admins"
                :key="key"
                :value="administrator.adminId"
              >{{administrator.email}}</option>
            </select>
          </div>
        </div>

        <div class="col-lg-8 col-lg-8 col-sm-6 buttonMargin pull-right">
          <p>
            <button type="submit">Remove Tag</button>
            <b-modal v-model="modalShow" id="modal-center" @ok="okModal" centered title="Added">
              <p class="my-4">The tag was removed.</p>
            </b-modal>
            <b-modal
              ok-variant="danger"
              v-model="modalShowFail"
              id="modal-center"
              centered
              title="ERROR"
            >
              <p class="my-4">Select a tag</p>
            </b-modal>
            <b-modal
              ok-variant="danger"
              v-model="modalShowCred"
              id="modal-center"
              centered
              title="ERROR"
            >
              <p class="my-4">remove failed</p>
            </b-modal>
          </p>
        </div>
      </form>
    </div>
  </form>
</template>
<script>
import { Validator } from "vee-validate";
export default {
  data: () => ({
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false,
    selected: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            adminId: this.selected
          };
          this.$store
            .dispatch("removeAdministrator", data)
            .then(response => {
              console.log("This is the response");
              console.log(response);
              if (response > 0) {
                return { modalShow: true, modalShowCred: false };
              } else {
                return { modalShow: false, modalShowCred: true };
              }
            })
            .then(data => {
              this.modalShow = data.modalShow;
              this.modalShowCred = data.modalShowCred;
              this.$validator.reset();
            });
          this.$validator.reset();
          return;
        } else {
          this.modalShowFail = true;
        }
      });
    },
    okModal() {
      this.$router.replace("/");
    }
  },
  computed: {
    admins() {
      return this.$store.state.administrators.administrators;
    }
  },
  mounted() {
    this.$store.dispatch("getAdministrators");
  }
};
</script>
<style>
</style>

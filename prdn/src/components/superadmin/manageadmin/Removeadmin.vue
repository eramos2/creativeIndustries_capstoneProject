<template>
 <form @submit.prevent="validateBeforeSubmit">  
    <div class="container">
    <form>
        <div class="container adminRemove marginTop">
            <h2><span class="glyphicon glyphicon-minus-sign"></span> Remove Administrator</h2>
            <div class="row">
            </div>
            <p class="lead">Enter the name of the administrator to remove.</p>
            <div class="row">
                                         </div>
        </div>

        <div class="container">
         <div class="form-group">
            <div :class="{'form-group': true, 'has-error': errors.has('adminEmail') }">
            <h4>Administrator Email</h4>
            <input name="adminEmail" v-validate="'required|email'"  type="email" id="adminEmail" v-model="adminEmail"  placeholder="Email address"  class="form-control"  >
            <p class="text-danger" v-if="errors.has('adminEmail')">{{ errors.first('adminEmail') }}</p>
            </div>
         </div>
        </div>


        <div class="col-md-4 col-sm-6 pull-right">
           

                <button  type="submit">Remove</button>
                <b-modal  v-model="modalShow" id="modal-center" @ok="okModal"  centered title="Removed">
                <p class="my-4">{{email}}</p>
                </b-modal>
                <b-modal ok-variant="danger" v-model="modalShowFail"  id="modal-center" centered title="ERROR">
                <p class="my-4">Try Again</p>
                </b-modal>
                <b-modal ok-variant="danger" v-model="modalShowCred" id="modal-center" centered title="ERROR">
                <p class="my-4">Remove failed</p>
                 </b-modal>

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
    email: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            email: this.email
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
  }
};
</script>
<style>
</style>

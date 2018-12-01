<template>
<form @submit.prevent="validateBeforeSubmit">  

<div class="container">

    <div class="row">

        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Business </h2>

            <p class="lead">Select the business you want to remove from the system.</p>

            <div class="row">
                <div style="overflow-y: scroll; height:400px;">
                <table class="table table-striped table-hover tableContainer" id="removBsnTable">
                    <thead>
                    <tr><th></th>
                    <th data-field="name" data-sortable="true">Business</th>
                    <th data-field="description" data-sortable="true">Description</th>
                    <th data-field="city" data-sortable="true">City</th>
                    </tr></thead>
                    <tbody id="businessList">
                        <tr 
                            v-for="(business, key) in businesses"
                            :key="key"
                        >
                            <td :id="business.companyId">
                                <input type="radio"  v-model="bid" :value="business.companyId">
                            </td>
                            <td>{{business.companyName}}</td>
                            <td>{{business.description}}</td>
                            <td>{{business.city}}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
                 <div class="row">
            <div class="col-lg-4  col-lg-4 col-sm-6  buttonMargin">
                <p>
                     <button :disabled="errors.any()" type="submit">Remove</button>
                     <b-modal  v-model="modalShow" id="modal-center" @ok="okModal"  centered title="Company Removed:">
                    <p class="my-4">removed business  success</p>
                      </b-modal>
                      <b-modal ok-variant="danger" v-model="modalShowCred"  id="modal-center" centered title="ERROR">
                    <p class="my-4">remove business  failed</p>
                      </b-modal>
                      <b-modal ok-variant="danger" v-model="modalShowFail" id="modal-center" centered title="ERROR">
                    <p class="my-4">Remove Business Failed Some fields are empty or invalid</p>
                      </b-modal>
                </p>
            </div>
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
      modalShow: false,
      modalShowFail: false,
      modalShowCred: false,
      bid: ""
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.bid != "") {
            let data = { companyId: this.bid };
            console.log(data);

            this.$store
              .dispatch("removeBusiness", data)
              .then(response => {
                console.log("Helooowwe removed business info");
                console.log(response);
                if (response >= 0) {
                  this.reloadBusinesses();

                  //Removed Business successfully, set the modal booleans
                  return { modalShow: true, modalShowCred: false };
                } else {
                  //Something went wrong when removing business
                  return { modalShow: false, modalShowCred: true };
                }
              })
              .then(data => {
                this.modalShow = data.modalShow;
                this.modalShowCred = data.modalShowCred;
              });
            this.$validator.reset();
            this.bid = "";
            return;
          } else {
            //Invalid or Empty fields
            this.modalShowFail = true;
          }
        } else {
          this.modalShowFail = true;
        }
      });
    },
    reloadBusinesses() {
      this.$store.dispatch("setBusinesses");
    },
    okModal() {
      this.$router.replace("/admin/remove");
    }
  },
  computed: {
    businesses() {
      return this.$store.state.businesses.businesses;
    }
  }
};
</script>
<style>
</style>


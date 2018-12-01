<template>
<form @submit.prevent="validateBeforeSubmit">
    <div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Remove Tag</h2>
    </div>

    <div id="error"></div>
    <div class="row">
    <!-- </form> -->
        <div class="form-group col-md-6">
                    <select class="form-control" v-model="selected" id="tagTypes">
                        <option value="none" disabled selected>Tags</option>
                       

                        <!-- Tag Categories -->
                        <option 
                        
                        v-for="(tagCategory,key) in tagCat"
                        :key="key"
                        
                        :value="tagCategory.tagId"
                        >
                        {{tagCategory.tagName}}
                        </option>
                    </select>
                </div>
    </div>
                 
                <div class="col-lg-8  col-lg-8 col-sm-6  buttonMargin">   
                <p>
                     <button type="submit">Remove Tag</button>
                      <b-modal  v-model="modalShow" id="modal-center" @ok="okModal"  centered title="Added">
                      <p class="my-4">The tag was removed.</p>
                      </b-modal>
                      <b-modal ok-variant="danger" v-model="modalShowFail"  id="modal-center" centered title="ERROR">
                      <p class="my-4">Select a tag</p>
                      </b-modal>
                      <b-modal ok-variant="danger" v-model="modalShowCred" id="modal-center" centered title="ERROR">
                      <p class="my-4">remove failed</p>
                      </b-modal>
                </p>
            </div>
 </div>
</form>
</template>
<script>
export default {
  data() {
    return {
      selected: "",
      modalShow: false,
      modalShowFail: false,
      modalShowCred: false
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            tagId: this.selected
          };
          if (this.selected == "") {
            this.modalShowFail = true;
          } else {
            this.$store
              .dispatch("removeTag", data)
              .then(response => {
                console.log(response);
                if (response > 0) {
                  this.reloadTags();
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
            this.selected = "";
            return;
          }
        } else {
          //Invalid or Empty fields
          this.modalShowFail = true;
        }
      });
    },
    okModal() {
      this.$router.replace("/admin/remove");
    },
    reloadTags() {
      this.$store.dispatch("setTags");
    }
  },
  computed: {
    tagCat() {
      return this.$store.state.tags.tags;
    }
  }
};
</script>
<style>
</style>

<template>
<form @submit.prevent="validateBeforeSubmit">
    <div class="container listContainer">
    <div class="row addMarginTop">
        <h2><span class="glyphicon glyphicon-edit marginTop"></span> Edit Tags</h2>
    </div>

    <div id="error"></div>
    <!-- </form> -->
        <div class="form-group">
                    <select class="form-control" v-model="selected" id="tagTypes">
                        <option value="none" disabled selected>Tags</option>
                       

                        <!-- Tag Categories -->
                        <option 
                        v-for="(tagCategory,key) in tagCat"
                        :key="key"
                        :tagCategory="tagCategory.tagCategory"
                        :value="tagCategory.tagId"
                        >
                        {{tagCategory.tagName}}
                        </option>
                    </select>
                </div>
                    <h5>Tag - Name</h5>
                <div class="row">
                    <div class="input-group input_fields_wrap subCatField col-md-12">
                        <input type="text" class="form-control" name="tagName" id="tagName" v-validate="'required|max:15'" v-model="tagName"  placeholder="Insert new name for Tag" >
                       <p class="text-danger" v-if="errors.has('tagName')">{{ errors.first('tagName') }}</p>
                        <!-- <button>Add</button> -->
                    </div>
                </div>
                <div class="col-lg-8  col-lg-8 col-sm-6  buttonMargin">   
                <p>
                     <button type="submit">Edit Tags</button>
                      <b-modal  v-model="modalShow" id="modal-center" @ok="okModal"  centered title="Added">
                      <p class="my-4">The tag was added.</p>
                      </b-modal>
                      <b-modal ok-variant="danger" v-model="modalShowFail"  id="modal-center" centered title="ERROR">
                      <p class="my-4">Try Again</p>
                      </b-modal>
                      <b-modal ok-variant="danger" v-model="modalShowCred" id="modal-center" centered title="ERROR">
                      <p class="my-4">Combination failed</p>
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
      modalShowCred: false,
      tagName: "",
      tagCategory: ""
    };
  },
  methods: {
    validateBeforeSubmit: function(e) {
      e.preventDefault();
      let data = {
        name: this.tagName,
        category: this.value
      };

      if (this.selected == "") {
        alert("Select a Tag");
      } else this.$store.dispatch("addNewTag", data);
      then(response => {
        if (response.length > 0) {
          this.reloadResources();
          return { modalShow: true, modalShowCred: false };
        } else {
          return { modalShow: false, modalShowCred: true };
        }
      }).then(response => {
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
    onChange() {}
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

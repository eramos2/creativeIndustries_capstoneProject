<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="container listContainer">
      <div class="row addMarginTop">
        <h2>
          <span class="glyphicon glyphicon-plus-sign marginTop"></span> Add New Tag
        </h2>
      </div>
      <div id="error"></div>
      <div>
        <div class="row">
          <div class="col-md-4 addCategoryList">
            <h5>Tag - Category</h5>
            <div class="form-group">
              <select class="form-control" v-model="value" id="tagTypes">
                <option value="none" disabled selected>Choose One Tag</option>
                <option id="addNewTag" value="addNewTag">New Tag</option>

                <!-- Tag Categories -->
                <option
                  v-for="(tagCategory,key) in tagCat"
                  :key="key"
                  :value="tagCategory.name"
                >{{tagCategory.name}}</option>
              </select>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div id="newTag" v-if="displayNewTag">
                  <input
                    type="text"
                    class="form-control"
                    name="newTagField"
                    placeholder="Enter New Tag"
                    v-validate="'required|max:15'"
                    v-model="newTagField"
                    id="newTagField"
                  >
                </div>
                <p
                  class="text-danger"
                  v-if="errors.has('newTagField')"
                >{{ errors.first('newTagField') }}</p>
              </div>
            </div>
            <!-- New Tag-Name -->
            <h5>Tag - Name</h5>
            <div class="row">
              <div class="input-group input_fields_wrap subCatField col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="tagName"
                  id="tagName"
                  v-validate="'required|max:15'"
                  v-model="tagName"
                  placeholder="Tag-Name"
                >
                <p class="text-danger" v-if="errors.has('tagName')">{{ errors.first('tagName') }}</p>
              </div>
            </div>

            <div class="col-lg-8 col-lg-8 col-sm-6 buttonMargin">
              <p>
                <!-- Modal Windows -->
                <button :disabled="errors.any()" type="submit">Add</button>
                <b-modal
                  v-model="modalShow"
                  id="modal-center"
                  @ok="okModal"
                  ok-only
                  centered
                  title="Added"
                >
                  <p class="my-4">The tag was added.</p>
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

          <div id="matConn" class="col-md-4 addCategoryList" style="display: none">
            <h5>Material Connections</h5>
            <ul class="list-group navList" id="matCons"></ul>
          </div>

          <div id="procConn" class="col-md-4 addCategoryList" style="display: none">
            <h5>Processes Connections</h5>
            <ul class="list-group navList" id="procCons"></ul>
          </div>
        </div>
      </div>
      <!-- </form> -->
    </div>
  </form>
</template>
<script>
/**
 * Custom Messages for Alerts if an error appear after validation
 */
import { Validator } from "vee-validate";
const dictionary = {
  en: {
    custom: {
      newTagField: {
        required: "The new tag field is required.",
        max: "The new tag field may not be greater than 15 characters."
      },
      tagName: {
        required: "The tag-name field is required.",
        max: "The tag-name field may not be greater than 15 characters."
      },
      newMatField: {
        required: "The new material field is required.",
        max: "The new material field may not be greater than 15 characters."
      }
    }
  }
};

Validator.localize(dictionary);

export default {
  data: () => ({
    modalShow: false,
    modalShowFail: false,
    modalShowCred: false,
    value: "",
    newTagField: "",
    tagName: ""
  }),
  methods: {
    validateBeforeSubmit: function(e) {
      e.preventDefault();

      this.$validator.validateAll().then(result => {
        if (result) {
          let data = {
            name: this.tagName,
            category: this.value
          };
          this.$store
            .dispatch("addNewTag", data)
            .then(response => {
              // console.log("after dispatch add new tag");
              // console.log(response);

              if (response > 0) {
                this.reloadTags();
                return { modalShow: true, modalShowCred: false };
              } else {
                return { modalShow: false, modalShowCred: true };
              }
            })
            .then(data => {
              this.modalShow = data.modalShow;
              this.modalShowCred = data.modalShowCred;
            });
          return;
        } else {
          this.modalShowFail = true;
        }
      });
    },
    okModal() {
      this.$router.replace("/admin/add");
    },
    reloadTags() {
      this.$store.dispatch("setTags");
    },
    test() {
      if (this.newTagField == "") {
        let data = {
          value: this.value,
          tagName: this.tagName
        };
        this.value = "";
        this.newTagField = "";
        this.tagName = "";
        // console.log(data);
      } else {
        let data = {
          value: this.value,
          newTagField: this.newTagField,
          tagName: this.tagName
        };
        this.value = "";
        this.newTagField = "";
        this.tagName = "";

        // console.log(data);
      }
    }
  },
  computed: {
    tagCat() {
      return this.$store.getters.getTags();
    },
    displayNewTag() {
      return this.value == "addNewTag";
    }
  }
};
</script>
<style>
</style>

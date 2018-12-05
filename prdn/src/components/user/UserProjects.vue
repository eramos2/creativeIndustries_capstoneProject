<template>
  <!-- Single Tab Content Start -->
  <!-- <div class="tab-pane fade" id="orders" role="tabpanel"> -->
  <div class id="orders" role="tabpanel">
    <div class="myaccount-content">
      <form @submit.prevent="validateBeforeSubmit">
        <h3>Select your Project</h3>
        <div class="row">
          <div class="form-group">
            <select
              class="form-control"
              v-model="selected"
              @change="onChange()"
              id="userProjectsSelect"
            >
              <option value="none" disabled selected>Choose Your Project</option>
              <option id="addNewProject" value="addNewProject">New Project</option>
              <option
                v-for="(project, key) in userProjects"
                :key="key"
                :value="project.id"
              >{{project.name}}</option>
            </select>
          </div>
        </div>
        <h3>My Projects Details</h3>

        <div class="account-details-form checkout-form-list">
          <!-- PROJECT NAME -->
          <div class="single-input-item">
            <label for="projectName" class="required">Project Name</label>
            <!-- v-validate="'required|max:20|alpha_spaces'" -->
            <input
              name="projectName"
              v-model="projectName"
              v-validate="'required|max:20|alpha_spaces'"
              type="text"
              id="projectName"
              placeholder="Project Name"
              class="form-control"
            >
            <p class="text-danger" v-if="errors.has('projectName')">{{errors.first('projectName')}}</p>
          </div>
          <fieldset>
            <!-- SELECT TAGS TO DESCRIBE PROJECT -->
            <!-- <div class="row">
              <div class="col-md-12 categoryList" id="tag-column-project">
                <div style="overflow-y: scroll; height:400px;">
                  <ul class="list-group navList" id="editMatProcCons">
                    <h3>Select 3 Tags to describe your project</h3>
                    <li class="input-group" name="tags" value="2">
                      <strong>Applications</strong>
                    </li>
                    <li class="catMargins">
                      <div class="checkbox">
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="tids.length > 2 && tids.indexOf(0)==-1"
                                v-model="tids"
                                :value="0"
                              >Tubing
                            </label>
                          </div>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="tids.length > 2 && tids.indexOf(1)==-1"
                                v-model="tids"
                                :value="1"
                              >Ornaments
                            </label>
                          </div>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="tids.length > 2 && tids.indexOf(2)==-1"
                                v-model="tids"
                                :value="2"
                              >Decorative
                            </label>
                          </div>
                        </li>
                        <li class="input-group" name="tags" value="2">
                          <strong>Qualities</strong>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="tids.length > 2 && tids.indexOf(3)==-1"
                                v-model="tids"
                                :value="3"
                              >Opaque
                            </label>
                          </div>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="tids.length > 2 && tids.indexOf(4)==-1"
                                v-model="tids"
                                :value="4"
                              >Breathable
                            </label>
                          </div>
                        </li>
                        <li class="catMargins">
                          <div class="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="tags"
                                :disabled="tids.length > 2 && tids.indexOf(5)==-1"
                                v-model="tids"
                                :value="5"
                              >Long Lasting
                            </label>
                          </div>
                        </li>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>-->
            <div class="col-md-6 categoryList">
              <div style="overflow-y: scroll; height:400px;">
                <ul class="list-group navList" id="addTags">
                  <div v-for="(tagCategory, key) in tags" :key="key">
                    <li class="input-group" name="tag" :value="tagCategory.name">
                      <strong>{{tagCategory.name}}</strong>
                    </li>
                    <li v-for="(tag, tagKey) in tagCategory.tags" :key="tagKey" class="catMargins">
                      <div class="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            name="tag"
                            :disabled="tids.length > 2 && tids.indexOf(0)==-1"
                            v-model="tids"
                            :value="tag.id"
                          >
                          {{tag.name}}
                        </label>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </fieldset>
          <!-- Modal windows -->
          <div class="single-input-item">
            <button :disabled="errors.any()" @click="okModal" type="submit">Submit</button>
            <b-modal
              v-model="modalShow"
              id="modal-center"
              @ok="okModal"
              ok-only
              centered
              title="Project Submited"
            >
              <p class="my-4">{{projectName}}</p>
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
              <p class="my-4">Something went wrong</p>
            </b-modal>
          </div>
        </div>
      </form>
      <singleitems
        v-show="selected != '' && selected != 'addNewProject'"
        id="single-item-column"
        :recommendations="recommendations"
      ></singleitems>
    </div>
  </div>

  <!-- Single Tab Content End -->
</template>
<script>
/**
 * Custom Messages for messages if an error appear after validation
 */
import { Validator } from "vee-validate";
import SingleItems from "./UserSingleItemBusinesses.vue";

const dictionary = {
  en: {
    custom: {
      singleitems: SingleItems,
      projectName: {
        required: "Please enter your project name.",
        alpha_spaces:
          "The project name field may only contain alphabetic characters.",
        max: "The project name field may not be greater than 15 characters."
      }
    }
  }
};

Validator.localize(dictionary);

export default {
  data() {
    return {
      modalShow: false,
      modalShowFail: false,
      modalShowCred: false,
      selected: "",
      projectName: "",
      tids: []
    };
  },
  methods: {
    /**
     * Validate the data inserted using Vee-Validate
     * @return modal with a notification
     */
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        console.log(result);
        if (result) {
          if (this.selected == "addNewProject") {
            //Adding new project
            let dataToSend = {
              projectName: this.projectName,
              uid: this.$store.state.users.user.userId,
              tids: this.getIdsArray("tags")
            };
            console.log(dataToSend);
            this.$store
              .dispatch("addProject", dataToSend)
              .then(response => {
                // console.log("Helooowwe");
                console.log(response);
                if (response.length > 0) {
                  //Added Project successfully, set the modal booleans
                  return { modalShow: true, modalShowCred: false };
                } else {
                  //Something went wrong when adding project
                  return { modalShow: false, modalShowCred: true };
                }
              })
              .then(data => {
                this.modalShow = data.modalShow;
                this.modalShowCred = data.modalShowCred;
              });
          } else {
            //Editing project
            let dataToSend = {
              projectName: this.projectName,
              projectId: this.selected,
              tids: this.getIdsArray("tags")
            };
            console.log(dataToSend);
            this.$store
              .dispatch("editProject", dataToSend)
              .then(response => {
                // console.log("Helooowwe");
                console.log(response);
                if (response.length > 0) {
                  //Added Project successfully, set the modal booleans
                  return { modalShow: true, modalShowCred: false };
                } else {
                  //Something went wrong when adding project
                  return { modalShow: false, modalShowCred: true };
                }
              })
              .then(data => {
                this.modalShow = data.modalShow;
                this.modalShowCred = data.modalShowCred;
              });
          }
          return;
        } else {
          //Invalid or Empty fields
          this.modalShowFail = true;
        }
      });
    },
    getIdsArray(subresource) {
      if (subresource == "materials") {
        let matArr = [];
        for (let id in this.smids) {
          matArr.push(["", this.smids[id]]);
        }
        return matArr;
      } else if (subresource == "services") {
        let servArr = [];
        for (let id in this.ssids) {
          servArr.push(["", this.ssids[id]]);
        }
        return servArr;
      } else if (subresource == "processes") {
        let procArr = [];
        for (let id in this.spids) {
          procArr.push(["", this.spids[id]]);
        }
        return procArr;
      } else {
        let tagArr = [];
        for (let id of this.tids) {
          // console.log(this.tids);
          console.log(id);
          tagArr.push([id]);
        }
        return tagArr;
      }
    },
    okModal() {
      //this.$validator.reset();

      this.$router.replace("/user/");
    },
    test() {
      let data = {
        projectName: this.projectName,
        description: this.description
      };
      projectName = "";
      description = "";
      console.log(data);
    },
    onChange() {
      this.tids = [];
      this.projectName = "";
      console.log("onChange before callin recommendations " + this.selected);
      if (this.selected == "" || this.selected == "addNewProject") {
      } else {
        this.$store.dispatch("getBusinessesRecommendations", {
          pid: this.selected
        });
        let projects = this.$store.state.users.userProjects;
        console.log(projects);
        let tags;
        for (let project of Object.values(projects)) {
          //Get project data if it matches the current selectedId
          if (project.id == this.selected) {
            console.log(project);
            this.projectName = project.name;
            tags = project.tags;
          }
        }
        for (let tag of Object.values(tags)) {
          this.tids.push(tag.id);
        }
      }
    }
  },
  components: {
    singleitems: SingleItems
  },
  computed: {
    recommendations() {
      if (this.selected != "") {
        return this.$store.state.businesses.businessesRecommendations;
      } else {
        return {};
      }
    },

    userProjects() {
      return this.$store.state.users.userProjects;
    },
    tags() {
      return this.$store.state.tags.categories;
    }
  },
  mounted() {}
};
</script>
<style>
#single-item-column {
  padding-top: 1.5rem;
}
#tag-column-project {
  padding-top: 1.5rem;
}
.myaccount-content {
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #ededed;
  padding: 30px;
}
.myaccount-content form {
  margin-top: -20px;
}
@media only screen and (max-width: 575px) {
  .myaccount-content {
    padding: 20px 15px;
  }
}
.myaccount-content h3 {
  font-size: 22px;
  line-height: 1.5;
  border-bottom: 1px dashed #777;
  padding-bottom: 10px;
  margin-bottom: 25px;
  margin-top: 0;
}
.myaccount-content .welcome p {
  color: #000;
}
.myaccount-content .welcome a {
  color: #000;
}
.myaccount-content .welcome a:hover {
  color: #12a4dd;
}
.myaccount-content .welcome strong {
  font-weight: 600;
  color: #39b0ff;
}
</style>

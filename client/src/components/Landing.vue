<template>
  <section>
    <b-container>
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8">
          <div>
            <h1>To-Do List</h1>
            <b-list-group v-for="(todo,id) in todos" :key="id">
              <b-list-group-item>
                <h5>{{todo.title}}</h5>
                <div>
                  <router-link :to="{path:'/todo/'+todo._id, params :{ id: todo._id, Todo: todo}}">
                    <b-button variant="primary">Show Details</b-button>
                  </router-link>
                </div>
              </b-list-group-item>
            </b-list-group>
          </div>
          <div v-show="!addForm"> 
            <b-button variant="primary" v-on:click="addForm = true">Create To-Do</b-button>
          </div>
          <div v-show="addForm">
            <b-container>
              <b-jumbotron header="New To-Do" border-variant="dark">
                <b-form>
                  <b-form-group id="title" label="Title:" label-for="title" description>
                    <b-form-input
                      id="title"
                      v-model="title"
                      type="text"
                      required
                      placeholder="Title"
                    ></b-form-input>
                  </b-form-group>

                  <div>
                    <label for="description">Description:</label>
                    <b-form-textarea
                      id="description"
                      v-model="description"
                      type="text"
                      required
                      placeholder="Description"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>

                  <div>
                    <label for="priority">Set Priority Level:</label>
                    <br />
                    <b-form-input
                      id="priority"
                      v-model="priority"
                      type="range"
                      min="0"
                      max="5"
                    ></b-form-input>
                    <div class="mt-2">Priority Level: {{ priority }}</div>
                  </div>

                  <div>
                    <b-button type="add" @click="onAdd($event)" variant="primary">Create</b-button>
                    <b-button type="cancel" @click="addForm=false" variant="danger">Cancel</b-button>
                  </div>
                </b-form>
              </b-jumbotron>
            </b-container>
          </div>
        </b-col>
        <b-col md="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import todoAPI from "../services/todoApi";
export default {
  data() {
    return {
      title:'',
      description:'',
      priority:0,
      date:(new Date()).toString().split(' ').splice(1,3).join(' '),
      todos: [],
      addForm:false
    };
  },
  components: {},
  methods: {
    async fetchTodos() {
      const res = await todoAPI.getTodos();
      this.todos = res.data;
    },
    onAdd(){
      const newTodo={
        title:this.title,
        description:this.description,
        date: this.date,
        priority:this.priority
      }
      todoAPI.addTodo(newTodo);
    }
  },
  mounted() {
    this.fetchTodos();
  }
};
</script>


<style  scoped>
</style>
<template>
  <section>
    <div v-show="!editForm">
      <b-container>
        <b-jumbotron
          :header="todo.title"
          :lead=" 'Date Added:- '+todo.date"
          bg-variant="info"
          text-variant="white"
          border-variant="dark"
        >
          <p>{{todo.description}}</p>
          <p>Priority Level:- {{todo.priority}}</p>
          <b-button variant="primary" v-on:click="editForm = true">Edit</b-button>
          <b-button variant="danger">Delete</b-button>
        </b-jumbotron>
      </b-container>
    </div>

    <div v-show="editForm">
      <b-container>
        <b-jumbotron :header="todo.title" border-variant="dark">
          <b-form @update="onUpdate($event)" @cancel="editForm = false">
            <b-form-group id="title" label="Title:" label-for="title" description>
              <b-form-input
                id="title"
                v-model="todo.title"
                type="text"
                required
                :placeholder="todo.title"
              ></b-form-input>
            </b-form-group>

            <div>
              <label for="description">Description:</label>
              <b-form-textarea
                id="description"
                v-model="todo.description"
                type="text"
                required
                :placeholder="todo.description"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </div>

            <div>
              <label for="priority">Set Priority Level:</label>
              <br />
              <b-form-input id="priority" v-model="todo.priority" type="range" min="0" max="5"></b-form-input>
              <div class="mt-2">Priority Level: {{ todo.priority }}</div>
            </div>

            <div>
              <b-button type="update" variant="primary">Update</b-button>
              <b-button type="cancel" variant="danger">Cancel</b-button>
            </div>
          </b-form>
        </b-jumbotron>
      </b-container>
    </div>
  </section>
</template>

<script>
import todoAPI from "../services/todoApi";
export default {
  data() {
    return {
      todo: null,
      editForm: false
    };
  },
  methods: {
    async fetchTodo() {
      const id = this.$route.params.id;
      const res = await todoAPI.getTodo(id);
      this.todo = res.data;
    },
    async onUpdate(evt) {
        evt.preventDefault();
        const id = this.$route.params.id;
        await todoAPI.editTodo(id,this.todo)
        this.editForm=true
    }
  },
  mounted() {
    this.fetchTodo();
  }
};
</script>

<style scoped>
</style>
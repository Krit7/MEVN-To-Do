<template>
  <section>
    <b-container>
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8">
          <h1>To-Do List</h1>
          <b-list-group v-for="(todo,id) in todos" :key="id">
            <b-list-group-item>
              <h5>{{todo.title}}</h5>
              <div v-if="!editForm">
                <router-link :to="{name:'/todo/'+todo._id, params :{ id: todo._id}}"><b-button variant="primary">Show Details</b-button></router-link>
              </div>
            </b-list-group-item>
          </b-list-group>
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
      todos: [],
    };
  },
  components:{
  },
  methods: {
    async fetchTodos() {
      const res = await todoAPI.getTodos();
      this.todos = res.data;
    },
    displayForm(){
        this.editForm=true
    }
  },
  mounted() {
    this.fetchTodos();
  }
};
</script>


<style  scoped>
</style>
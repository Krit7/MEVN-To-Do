import Landing from '../components/Landing.vue'
import Todo from '../components/Todo.vue'

export const routes =[
    {
        path : '/',
        component : Landing
    },
    {
        path : '/todo/:id',
        component: Todo,
        props:true
    }
]
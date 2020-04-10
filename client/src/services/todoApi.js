import Api from './Api'

export default {
    getTodos() {
        return Api().get('/')
    },
    getTodo(todoID){
        var link = '/todo/' + todoID
        return Api().get(link)
    },
    addTodo(todo){
        return Api().post('/newtodo',{
            todo:todo
        })
    },
    removeTodo(todoID) {
        var link = '/delete/' +todoID
        return Api().post(link, {
            todoID: todoID
        })
    },
    editTodo(todoID, todo) {
        var link = '/edit/' + todoID
        console.log(link)
        return Api().post(link, {
            todoID: todoID,
            todo: todo
        })
    }
}
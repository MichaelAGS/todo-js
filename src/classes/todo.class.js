
export class Todo {

    // recibe el objeto todo pero se realiza desestructuración
    static fromJson( {id, tarea, completado, fechaCreacion} ){

        // se genera instancia para objeto almacenado en localStorage
        const tempTodo = new Todo( tarea );

        // piso los parametros generado con los del objeto desestructurado
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.fechaCreacion = fechaCreacion;

        return tempTodo;
    }

    constructor( tarea ) {
        this.tarea = tarea;
        
        this.id = new Date().getTime();
        this.completado = false;
        this.fechaCreacion =  new Date();
    }

    imprimirTodo() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}
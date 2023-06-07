// components/TodoList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet ,CheckBox} from 'react-native';
import { toggleTodo, markTodo, deleteTodo, deleteAllTodos, toggleCheckbox } from '../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, toggleTodo, markTodo, deleteTodo, deleteAllTodos, toggleCheckbox }) => {
    const reversedTodos = [...todos].reverse(); // Reverse the todos array

    return (
        <View style={styles.container}>
           
            {todos.length !== 0 && <TouchableOpacity onPress={deleteAllTodos}>
                <Text style={styles.deleteAllButton}><DeleteIcon /></Text>
            </TouchableOpacity>
            }
            <Text >Task List</Text>
            {reversedTodos.map((todo) => (
                <View key={todo.id} style={styles.todoContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        value={todo.completed}
                        onValueChange={() => toggleCheckbox(todo.id)}
                    />
                    <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
                        <Text
                            style={[
                                styles.todoText,
                                todo.completed && styles.completedTodo,
                            ]}
                        >
                            {todo.text}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTodo(todo.id)} style={styles.deleteOneTodo}>
                        <Text><DeleteIcon color="primary" /></Text>
                    </TouchableOpacity>
                </View>
            ))}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        padding: 20,
        width:'100%',
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius:"10px",
        padding:"5px",
        backgroundColor:'#dbe4f1',
    },
    todoText: {
        maxWidth:"270px",
       
        fontSize: 20,
        flexWrap: "wrap",
        paddingLeft:"5px",
        paddingRight:'5px',
        
    },
    completedTodo: {
        color:'red'
    },
    checkbox:{
      
       border:'none',
       marginLeft:'12px',
     
    },
    deleteAllButton: {
        color:'red',
        fontSize: 18,
        marginTop: 10,
        marginBottom:15,
        alignSelf: 'end',
    },
});

const mapStateToProps = (state) => ({
    todos: state.todos,
});

export default connect(mapStateToProps, { toggleTodo, markTodo, deleteTodo, deleteAllTodos,toggleCheckbox })(TodoList);

// components/AddTodoForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { addTodo } from '../redux/actions';

const AddTodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleAddTodo = () => {
        addTodo(text);
        setText('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={(value) => setText(value)}
                placeholder="Enter a todo..."
            />
            <Button title="Add Todo" onPress={handleAddTodo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
    },
    input: {
        backgroundColor:'#becee5', 
        borderColor: 'gray',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        
    },
});

export default connect(null, { addTodo })(AddTodoForm);

// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/redux/reducers';
import TodoList from './src/components/TodoList';
import AddTodoForm from './src/components/AddTodoForm';
import { View , StyleSheet ,TouchableOpacity,Text} from 'react-native';
 
const store = createStore(rootReducer);

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Provider store={store}>
      <View style={[styles.container, darkMode && styles.darkContainer]}>
        <TouchableOpacity onPress={handleToggleDarkMode}>
          <Text style={styles.toggleModeButton}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Text>
          <Text style={{ alignSelf: "center", marginTop: "10px",fontSize:"20px",fontWeight:"bold" }}>Task Details</Text>
        </TouchableOpacity>
        
        <TodoList />
        <AddTodoForm />
      </View>
    </Provider>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'columne',
    justifyContent: 'space-between',
    width:'100%',
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  toggleModeButton: {
    alignSelf: 'flex-start',
    paddingLeft:'16px',
    paddingTop:"20px",
    color: '#007aff',
    fontSize: 16,
    marginTop: 20,
  },
});


export default App;

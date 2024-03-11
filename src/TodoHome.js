import {
  FlatList,
  PlatformColor,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IconButton} from 'react-native-paper';

const TodoHome = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editTodoList, setEditTodo] = useState(null);

  const handleAddTodo = () => {
    if (todo !== '')
      setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);

    setTodo('');
  };

  const handleDeleteTodo = id => {
    const UpdatedTodoList = todoList.filter(x => x.id !== id);

    setTodoList(UpdatedTodoList);
  };

  const editTodo = todo => {
    setEditTodo(todo);
    setTodo(todo.title);
  };

  const updatedTodo = () => {
    const updatedEditTodo = todoList.map(x => {
      if (x.id === editTodoList.id) {
        return {...x, title: todo};
      }
      return x
    });
    setTodoList(updatedEditTodo);
    setEditTodo(null);
    setTodo("");

    
  };
  // const data = [
  //   {
  //     id: '01',
  //     title: 'Om Prakash',
  //   },
  //   {
  //     id: '02',
  //     title: 'Deepak',
  //   },
  //   {
  //     id: '03',
  //     title: 'John',
  //   },
  //   {
  //     id: '04',
  //     title: 'Alice',
  //   },
  //   {
  //     id: '05',
  //     title: 'Michael',
  //   },
  //   {
  //     id: '06',
  //     title: 'Emily',
  //   },
  //   {
  //     id: '07',
  //     title: 'David',
  //   },
  //   {
  //     id: '08',
  //     title: 'Sarah',
  //   },
  //   {
  //     id: '09',
  //     title: 'James',
  //   },
  //   {
  //     id: '10',
  //     title: 'Emma',
  //   },
  // ];

  return (
    <View style={{marginHorizontal: 20}}>
      <TextInput
        style={{
          borderWidth: 2,
          paddingVertical: 5,
          paddingHorizontal: 5,
          marginTop: 25,
        }}
        value={todo}
        onChangeText={x => setTodo(x)}
        placeholder="Add Task"></TextInput>
     {editTodoList?  <TouchableOpacity
        style={{
          paddingVertical: 15,
          paddingHorizontal: 5,
          backgroundColor: '#000',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={()=> updatedTodo()}>
        <Text style={{color: '#fff', fontSize: 15}}>save</Text>
      </TouchableOpacity>
  : ( <TouchableOpacity
  style={{
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: '#000',
    alignItems: 'center',
    marginTop: 20,
  }}
  onPress={handleAddTodo}>
  <Text style={{color: '#fff', fontSize: 15}}>Add</Text>  
</TouchableOpacity>
)}
      <FlatList
        style={{marginTop: 20}}
        data={todoList}
        renderItem={({item}) => {
          return (
            <View
              style={{
                borderWidth: 1,
                backgroundColor: '#f47',
                margin: 5,
                paddingVertical: 10,
                paddingLeft: 10,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 20, flex: 1}}>{item.title}</Text>

              <IconButton
                icon={'car' }
                onPress={() => handleDeleteTodo(item.id)}
              />
              <IconButton icon={'laptop'} onPress={x => editTodo(item)} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default TodoHome;

const styles = StyleSheet.create({});

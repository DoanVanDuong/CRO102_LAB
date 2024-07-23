import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemTodo from './lab2/ItemTodo'

const App = () => {
  const [addTt, setUpdateTt] = useState('false');
  const [modalVisible, setModalVisible] = useState(false);
  const [addTitle, setUpdatedTitle] = useState('');
  const [addNd, setUpdateNd] = useState('');
  const [data, setdata] = useState([]);
  const [newData, setnewData] = useState({ title: '', nd: '', tt: true });
  useEffect(() => {
    const initialTasks = [
      { id: 1, title: 'San pham 1', nd: 'Sach kinh te', tt: 'false' },
      { id: 2, title: 'San pham 2', nd: 'Sach cong nghe thong tin', tt: 'true' },
    ];
    setdata(initialTasks);
    console.log(data);
    
  }, [])
  const deleteData = (dataId) => {
    const updatedTasks = data.filter(data => data.id !== dataId);
    setdata(updatedTasks);
    console.log(data);
  };
  const updateDataStatus = (dataId, updatedItem) => {
    const updatedTasks = data.map(item =>
      item.id === dataId ? { ...item, ...updatedItem } : item
    );
    setdata(updatedTasks);
    console.log(data);
  };
  const addData = () => {
    const id = data.length + 1;
    const newItem = { id, title: addTitle, nd: addNd, tt: addTt };
    const updatedData = [...data];
    updatedData.push(newItem);
    setdata(updatedData);
    setnewData({ title: '', nd: '', tt: true });
    setModalVisible(false);
    console.log(data);
  };
  const completedTasks = data.filter(item => item.tt === 'true').length;
  const incompleteTasks = data.length - completedTasks;
  return (
    <View>
          <Text style={styles.counterText}>APP TODO</Text>
      <Text style={styles.counterText}>Công việc hoàn thành: {completedTasks}</Text>
      <Text style={styles.counterText}>Công việc chưa hoàn thành: {incompleteTasks}</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => <ItemTodo item={item} deleteData={deleteData} updateData={updateDataStatus} />}
        keyExtractor={item => item.id.toString()}
      />
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add San Pham</Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={setUpdatedTitle}
              placeholder="Enter Title"
            />
            <TextInput
              style={styles.modalInput}
              onChangeText={setUpdateNd}
              placeholder="Enter Content"
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setUpdateTt(addTt === 'false' ? 'true' : 'false')}
            >
              <Text style={styles.buttonText}>{addTt === 'true' ? 'Hoàn thành' : 'Chưa hoàn thành'}</Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', marginTop: 10, flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
              <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={addData}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  counterText: {
    fontSize: 18,
    color: '#343a40',
    textAlign: 'center',
    marginBottom: 5,
  },
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'red',
    fontSize: 25,
    fontStyle: 'italic',
    marginTop: 10,
  },
  content: {
    color: 'green',
    fontSize: 20,
    marginTop: 20,
  },
  status: {
    color: 'blue',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },
  buttonClose: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonCancel: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
})
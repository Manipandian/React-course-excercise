import axios from 'axios'

const dataUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const allData = axios.get(dataUrl);
    return allData.then(response => response.data);
}

const addData = (newDatas) => {
    const newData = axios.post(dataUrl, newDatas);
    return newData.then(response => response.data);
}

const removeData = (id) => {
    axios.delete(`${dataUrl}/${id}`);
}

const updateData = (id, newData) => {
    const updatedData = axios.put(`${dataUrl}/${id}`, newData);
    return updatedData.then(response => response.data);
}


export default {getAll, addData, removeData, updateData};
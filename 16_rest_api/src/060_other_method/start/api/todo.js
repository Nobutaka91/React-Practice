import axios from "axios";

// エンドポイントのURLを定義
const ENDPOINT_URL = 'http://localhost:3003/todo' 

const todoApi = {
  // すべてのTODOを取得
  async getAll() {
    const result = await axios.get(ENDPOINT_URL); 
    console.log(result);
    return result.data;
  },
  // TODOを追加
  async post(todo) {
    const result = await axios.post(ENDPOINT_URL, todo);
    return result.data;
  },
  // TODOを削除
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + '/' + todo.id);
    return result.data;
  },
  // TODOを更新
  async patch(todo) {
    const result = await axios.put(ENDPOINT_URL + '/' + todo.id, todo);
    return result.data;
  }
}


export default todoApi;
import axios from "axios";

export const notifyPOST = async (data: any) => {
  try {
    const headers: any = {
      'Content-Type': 'application/json; charset=UTF-8',
    }
    const response =  await axios.post(`http://localhost:3000/notify`, data, {headers})
    return response.data
  } catch (e) {
    console.log(e)
    return null
  }
}
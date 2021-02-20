import  axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://openapi.clearspending.ru/restapi/v3/contracts/get/?regnum=0173100000414000011',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      
    },
    

})

export default {

    getOrder() {
        return apiClient.get()
    }
}
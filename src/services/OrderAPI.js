import  axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://damia.ru/api-zakupki/zakupka',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      
    },
    

})

export default {

    getOrder(regn) {
        return apiClient.get(`?regn=${regn}&key=b86c8cd8bffedc75ba2cf6c2e8439b48a590ca27`)
    }
}
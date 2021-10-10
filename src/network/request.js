import axios from "axios";

export default function request(config,success,error){
  const init = axios.create({
    baseURL:'http://localhost:8899/',
    timeout: 5000,
  })

  //init.interceptors.request.use(success => console.log(success,'data'),error => console.log(error,'error'))

  init(config).then(data => {
    success(data)
  }).catch(data => {
    error(data)
  })
  return init(config)
}

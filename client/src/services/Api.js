// Front End
import axios from 'axios'

export default () => {
  return axios.create({
    // points to backend utl of 8081
    baseURL: `http://localhost:8081`
  })
}

import { errorUser, seccessUser, startUser } from './userSlice'
import axios from 'axios'
export const addUser = async (user, dispatch) => {
  // when start
  dispatch(startUser())

  try {
    // this await to resepshanist the data
    const res = await axios.post('http://localhost:5000/api/users', user)
    // when data seccess to back
    dispatch(seccessUser(res.data))
    // this case if found error
  } catch (err) {
    dispatch(errorUser())
  }
}

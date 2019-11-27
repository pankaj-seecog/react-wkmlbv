import axios from 'axios';



let get_final_users = (userList)=>{
return {
  type : "GET_USERS",
  payload : userList
}
}

let fetch_user_details = ()=>{
  console.log("Inside action")
  return (dispatch)=>{
//start the async code
axios.get("https://jsonplaceholder.typicode.com/users")
.then((resUserList)=>{
console.log("Action creator ",resUserList.data);
dispatch(get_final_users(resUserList.data))
})
.catch((err)=>{
  console.log('The error is ',err);
})
//end the async code
  }
}

export default fetch_user_details;
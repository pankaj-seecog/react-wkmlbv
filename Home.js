import React from 'react';
import {connect} from 'react-redux';
import fetch_user_details from "./myaction";
class Home extends React.Component{

constructor(){

}

render(){
  return (
    <div>
<hr/>
<table>
<th>Name</th><th>Email</th>
{
  this.props.pusers.map((x,i)=>{
    return <tr key={i}>
    <td>{x.name}</td>
     <td>{x.email}</td>
    </tr>
  })
}
</table>
<hr/>
<button onClick={this.props.getList}>get Users</button>
    </div>
  )
}

}
let mapStateToProps =(state)=>{
  console.log('The store state is ==> ',state.users)
return {
  pusers : state.users
}
}

let mapDispatchToProps = (dispatch)=>{
return {
  getList : ()=>{
    console.log('Inside dispatch ')
    dispatch(fetch_user_details())
  }
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
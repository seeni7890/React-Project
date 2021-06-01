import React, { Component } from 'react';
import Signup from './Signup';
import Table from './Table';
import axios from 'axios'


class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      data:[],
      editData:[]
    }
  }
  create = data => {
    if(!data.isEdit){

      axios.post("http://localhost:5000/info",data).then(res => {
        this.getAll()
      })
    }else{
      
      axios.put("http://localhost:5000/info/update",data).then(res => {
        this.getAll()
      })
    }
  }

 componentDidMount()
 {
   this.getAll()
 }

 getAll(){
   axios.get("http://localhost:5000/info").then(res => {
     this.setState({
       data:res.data
     })
   })
 }

 update = data => {
   console.log(data);
   this.setState({
     editData:data
   })
 }

 del = data => {
    var option = window.confirm(`${data.Name} confirm to delete`)
    if(option){
      axios.delete(`http://localhost:5000/info/del/${data._id}`).then(res => {
        console.log(res)
        this.getAll()
      })
    }
 }
  render()
  {
    return(
      <div>
        <div>
          <div>
            <Signup myData={this.create} setForm={this.state.editData}/>
          </div>
          <div>
            <Table getData={this.state.data} setData={this.update} del={this.del} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

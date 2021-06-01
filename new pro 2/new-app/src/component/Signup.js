import React, { Component } from 'react'

class Signup extends Component {

   constructor(){
       super();

       this.state = {
           _id:"",
           Name:"",
           Age:"",
           City:"",
           isEdit:false
       } 
   }
   handleChange = e => {
    const { name,value } = e.target

    this.setState({
        [name]:value
    })
  }

   handleSubmit = event => {
       
     if(!this.state.isEdit)
     {
        // event.preventDefault();
         let data = {
            isEdit:this.state.isEdit,
             Name:this.state.Name,
             Age:this.state.Age,
             City:this.state.City
         }
         this.props.myData(data)
     }
     else
     {
        // event.preventDefault();
        let data = {
            _id:this.state._id,
            isEdit:this.state.isEdit,
            Name:this.state.Name,
            Age:this.state.Age,
            City:this.state.City
        }
        this.props.myData(data)
     }
   }


   componentWillReceiveProps(props){
       
       if(props.setForm._id != null)
       {
           this.setState({
               _id:props.setForm._id,
               Name:props.setForm.Name,
               Age:props.setForm.Age,
               City:props.setForm.City,
               isEdit:true
           })
       }
   }

    render(){
    return (
        <div>
            <h1>Sign Up</h1>
            <form className="form" onSubmit={this.handleSubmit} autoComplete="off">
                <div className="form-detaile">
                 <label>Name</label>
                 <input type="text" id="Name" name="Name"
                 onChange={this.handleChange} value={this.state.Name} />
                </div>
                <div className="form-detaile">
                 <label>Age</label>
                 <input type="text" id="Name" name="Age"
                 onChange={this.handleChange} value={this.state.Age}/>
                </div>
                <div className="form-detaile">
                 <label>City</label>
                 <input type="text" id="Name" name="City"
                 onChange={this.handleChange} value={this.state.City}/>
                </div>
                <div>
                    <button type="submit" id="button">{this.state.isEdit ? "update" : "create"}</button>
                </div>
            </form>
        </div>
    )
}

}
export default Signup;
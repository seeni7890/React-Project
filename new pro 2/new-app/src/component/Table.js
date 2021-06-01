import React, { Component } from 'react'

class Signup extends Component {


    render(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <br/>
                        <th>Age</th>
                        <br/>
                        <th>City</th>
                        <br/>
                        <th>Edit</th>
                        <br/>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       this.props.getData.length > 0 ?
                       (
                           this.props.getData.map(e => 
                               <tr key={e._id}>
                                   <td>{e.Name}</td>
                                   <br/>
                                   <td>{e.Age}</td>
                                   <br/>
                                   <td>{e.City}</td>
                                   <br/> 
                                   <td><button className="btn btn-primary" 
                                   onClick = {event => {
                                       this.props.setData(e)
                                   }}>
                                       Edit</button></td>
                                   <br/>
                                   <td><button className="btn btn-primary"
                                    onClick = {event => {
                                        this.props.del(e)
                                    }}>
                                        Delete</button></td>
                                </tr>
                           )
                       ) 
                       :
                       (
                           <tr>
                               <td>No data</td>
                           </tr>
                       )
                    }
                </tbody>
            </table>
        )
    }
    
    }
    export default Signup;
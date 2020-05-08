import React, { Component } from 'react';

class Users extends Component{

    // call updateUser (App.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.fname.value, this.lname.value,this.phone.value,this.gender.value);
    }

    render(){

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.fname = val}} required defaultValue={user.fname}/></td>
                    <td><input type="text" ref={(val) => {this.lname = val}} required defaultValue={user.lname}/></td>
                    <td><input type="number" ref={(val) => {this.phone = val}} required defaultValue={user.phone}/></td>
                    <td><input type="text" ref={(val)=>{this.gender=val}} required defaultvalue={user.gender}></input></td>
                    
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender}</td>
                     <td><button className="btn white black-text" onClick={() => pressEditBtn(index)}>Edit</button>  |  <button className="btn red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>

            );
        });

        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>PhoneNumber</th>
                    <th>Gender</th>
                    
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Users;
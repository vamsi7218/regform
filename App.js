import React, { Component } from 'react';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends Component{

    // Default dummy data
    state = {

        users:[
          {fname:"jhone",lname:"smart",phone:245454,gender:"male",isEditing:false},
          {fname:"michale",lname:"abc",phone:23435,gender:"female", isEditing:false},
              
        ]
      }
      
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // (i, name, age) is received from Users.js
      updateUser = (i, fname,lname,phone,gender) => {
        let users = this.state.users;
        users[i].fname = fname;
        users[i].lname = lname;
        users[i].phone=phone;
        users[i].gender=gender;
      
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div className="container">
                
                 <h1>User Form</h1>                   
                <AddUser addUser={this.addUser}/>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
               
            </div>
        );
    }
}

export default App;
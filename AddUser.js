import React,{ Component } from 'react';


class AddUser extends Component{
    
   state = {
        fname:null,
        lname:null,
        phone:null,
        gender:null,
        chooseState:null,
        
        isEditing:false
    };
   //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            

        });
    }

    render(){
        return(
            <div >
                <form onSubmit={this.handleSubmit}>
                    <p>Enter First Name:</p>
                     <input name="fname" placeholder="Enter your first name" required type="text" onChange={ this.updateState} />
                     <p>Enter LastName:</p><input name="lname" type="text" required placeholder="Enter your Lastname" onChange={ this.updateState } />
                   
             
                       <p>Enter Phone Number:</p> <input name="phone" type="number" required placeholder="Enter your Phone" onChange={ this.updateState } /><br></br>
                       <form>
                           <p>Gender:</p>
                       <input type="radio" id="male" name="gender" value="male" onChange={this.updateState}></input>
                           <label for="male">Male</label><br/>
                          <input type="radio" id="female" name="gender" value="female" onChange={this.updateState}></input>
                   <label for="female">Female</label><br></br>
                    <input type="radio" id="other" name="gender" value="other" onChange={this.updateState}></input>
                    <label for="other">Other</label><br></br></form>
                
                       <br>
                      </br>
                    <input type='submit' ></input>
                  
                   
                   
                </form>
            </div>
        );
    }
}
export default AddUser;
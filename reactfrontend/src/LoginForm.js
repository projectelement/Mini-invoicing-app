import React, { Component } from "react";


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
     
        this.addItem = this.addItem.bind(this);
        
      }
      addItem(e) {
        if (this._Email.value !== "" ) {
            var newItem = {
              text: this._Email.value,
              //text1: this._Pass.value,
              key: Date.now()
            };

            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._Email.value = "";
            //this._Pass.value = "";

        }
        console.log(this.state.items);
     
            e.preventDefault();
        }
    render() {
      return (
        <div className="Container">
            <form >
                <input ref={(a) => this._Email = a} placeholder="Email"/>
                <input ref={(b) => this._Pass = b} placeholder="Password"/>
                <button onClick={() => this.addItem(this._Email) }type="submit">Submit</button>
            </form>
        </div>
      );
    }
  }

  export default LoginForm;
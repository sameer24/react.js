import React from "react";

class Main extends React.Component{
            constructor(){
                super();
                this.state = { data: 0 };
                console.log("Main Component ----- Constructor");
            }

            change(){
                this.setState({data: this.state.data+1});
            }

            componentWillMount(){
                console.info("Main Component componentWillMount ----- Will Mount");
            }

            /* 
            shouldComponentUpdate(newProps, newState){
                console.info("Main Component  shouldComponentUpdate----- Should Component Update");
                /*return true;*/
                //return false;
           // }
          /*  */

            render(){
                console.log("Main Component ----- Render");
                return (
                    <div>
                        <button onClick={this.change.bind(this)}>Change</button>
                        <ChildComponent value={this.state.data}/>
                    </div>
                );
            }
        }

        class ChildComponent extends React.Component{
            componentWillMount(){
                console.info("Child Component ----- Will Mount");
            }

            componentDidMount(){
                console.info("Child Component ----- Did Mount");
            }

            componentWillReceiveProps(newProps){
                console.info("Child Component ----- Will Receive Props");
            }

            shouldComponentUpdate(newProps, newState){
                console.info("Child Component ----- Should Component Update");
                /*return true;*/
                return false;
            }

            componentWillUpdate(newProps, newState){
                console.info("Child Component ----- Will Update");
            }

            componentDidUpdate(prevProps, prevState){
                console.info("Child Component ----- Did Update");
            }

            componentWillUnmount(){
                console.info("Child Component ----- Will Unmount");
            }

            render(){
                console.info("Child Component ----- Render");
                return (
                    <div>
                        <h3>{this.props.value}</h3>
                    </div>
                );
            }
        }
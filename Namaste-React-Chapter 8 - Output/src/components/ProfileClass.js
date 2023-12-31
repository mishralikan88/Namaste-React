import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("child-constructor called: " + this.props.name);
  }

  componentDidMount() {
    console.log("child-component did mount is called: " + this.props.name);
  }

  render() {      
    console.log("child-render() called: " + this.props.name);
    return (
      <div>
        <h1>Profile Class based Component</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>count: {this.state.count}</h2>
        <h2>count: {this.state.count2}</h2>
        <button
          onClick={() => {
            // DO NOT MUTATE THE STATE DIRECTLY.NEVER DO this.state = some Value
            this.setState({
              count: 1,
              count2: 2,
            });
            // this.setState({
            //   count2: 2,
            // });
          }}
        >
          setCount- Classbased
        </button>
      </div>
    );
  }
}
export default Profile;

// this refers to the instance of the Profile class where props get attached to.
// We receive props from parent component.

import React, { Component } from "react";
import Input from "./../components/Input/Input";
import Number from "./../components/Number/Number"
import Button from "../components/Button/Button";
import Select from "../components/Select/Select";
import Slider from "../components/Slider/Slider";
import Switch from "../components/Switch/Switch";
import DatePicker from "../components/DatePicker/DatePicker";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        gender: ""
      },
    };

    //this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);   
  }

  // handleFullName(e) {
  //   let value = e.target.value;
  //   this.setState(
  //     prevState => ({
  //       newUser: {
  //         ...prevState.newUser,
  //         name: value
  //       }
  //     }),
  //     () => console.log(this.state.newUser)
  //   );
  // }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://google.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        gender: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input/>{" "}

        <Number/>{" "}

        <Select/>{" "}

        <DatePicker/>{" "}

        <Switch/>{" "}

        <Button/>{" "}

{/* the idea of this component, Slider,  is to show percentage of filling the form with data */}
        <Slider/>{" "}
      </form>
    );
  }
}

export default FormContainer;

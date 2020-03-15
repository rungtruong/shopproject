import React, { Component } from "react";
import Select from "react-select";
import "react-select-plus/dist/react-select-plus.css";
import { css } from "emotion";

export default class DashBoard extends Component {
  state = {
    selectedOption: ""
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption.value;
    const options = [
      {
        label: "Primary ",
        value: "1",
        level: "0"
      },
      {
        label: "Primary-1.1",
        value: "1-1",
        level: "1"
      },
      {
        label: "Primary-1.1.1",
        value: "1-1-1",
        level: "2"
      },
      {
        label: "Secondary",
        value: "2"
      },
      {
        label: "Secondary-2.1",
        value: "2-1",
        level: "1"
      },
      {
        label: "Secondary2.2",
        value: "2-2",
        level: "1"
      }
    ];
    const customStyles = {
      // control: styles => ({ ...styles, backgroundColor: "white" }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        // if (data.level)
          return {
            ...styles,
            paddingLeft: (data.level*10+10)
          };
        // else if (data.level === "2")
        //   return {
        //     ...styles,
        //     paddingLeft: 30
        //   };
        // else
        //   return {
        //     ...styles,
        //     paddingLeft: 10
        //   };
      }
    };
    return (
     <div className="content">
        <Select
        // menuIsOpen
        // value={value}
        onChange={this.handleChange}
        options={options}
        styles={customStyles}
      />
     </div>
    );
  }
}

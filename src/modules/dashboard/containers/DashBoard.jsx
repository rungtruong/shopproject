import React, { Component } from "react";
import Select, { components } from "react-select";

import { css } from "@emotion/core";
export default class DashBoard extends Component {
  state = {
    selectedOption: ""
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    const options = [
      {
        label: "Group1",
        type: "group",
        options: [
          { label: "Option 1", value: "1", type: "option" },
          {
            type: "group",
            label: "Option 2",
            value: "2",
            options: [
              { label: "Option 2-a", value: "2a", type: "option" },
              { label: "Option 2-b", value: "2b", type: "option" }
            ]
          }
        ]
      },
      {
        label: "Group2",
        type: "group",
        options: [
          { label: "Option 3", value: "3", type: "option" },
          {
            type: "group",
            label: "Option 4",
            value: "2",
            options: [
              { label: "Option 4-a", value: "4a", type: "option" },
              { label: "Option 4-b", value: "4b", type: "option" }
            ]
          }
        ]
      }
    ];

    const renderNestedOption = (props, label, nestedOptions) => {
      const { cx, getStyles, innerProps, selectOption } = props;
      // Will be applied to nested optgroup headers
      const nestedLabelClassName ="nested-optgroup-label";
      //  cx(
      //  css(getStyles("groupHeading", props)),
      //   { option: true },
      //   "nested-optgroup-label"
      // );
      return (
        <div className='nested-optgroup'>
          <div className={nestedLabelClassName}>{label}</div>
          {nestedOptions.map(nestedOption => {
            if (nestedOption.options) {
              return renderNestedOption(
                props,
                nestedOption.label,
                nestedOption.options
              );
            }
            const nestedInnerProps = innerProps;
            nestedInnerProps.onClick = () => {
              console.log(nestedOption);
              
              selectOption(nestedOption);
            };
            return (
              <div className='nested-optgroup-option' key={nestedOption.value}>
                <components.Option {...props} innerProps={nestedInnerProps}>
                  {nestedOption.label}
                </components.Option>
              </div>
            );
          })}
        </div>
      );
    };

    const OptionCustom = props => {
      const { children, data } = props;
      const nestedOptions = data.options;

      if (nestedOptions) {
        // console.log(nestedOptions);

        const label = data.label;
        return renderNestedOption(props, label, nestedOptions);
      }

      return <components.Option {...props}>{children}</components.Option>;
    };

    return (
      <div className='content'>
        <Select
          menuIsOpen
          // value={value}
          onChange={this.handleChange}
          options={options}
          components={{ Option: OptionCustom }}
        />
      </div>
    );
  }
}

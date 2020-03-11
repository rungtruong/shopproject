import React, { Component } from "react";
import Select2 from "react-select2-wrapper";
export default class DashBoard extends Component {
  render() {
    return (
      <div className='content'>
        <Select2
          multiple
          data={[
            {
              text: "Development",
              children: [
                { text: "bug", id: 1 },
                { text: "feature", id: 2 }
              ]
            },
            {
              text: "documents",
              children: [
                { text: "bug", id: 1 },
                { text: "feature", id: 2 }
              ]
            },
            { text: "discussion", id: 4 }
          ]}
          options={{
            placeholder: "search by tags"
          }}
        />
      </div>
    );
  }
}

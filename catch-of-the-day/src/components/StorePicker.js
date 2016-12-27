import React from 'react';

class StorePicker extends React.Component {
  render(){
    return (
      <form classname="store-selector">
          <h2>Please Enter a Store </h2>
          <input typre="text" require placeholder="store name" />
          <button type="submit"> Visit Store - </button>
      </form>
      )
  }
}
export default StorePicker;

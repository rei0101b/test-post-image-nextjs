import React from "react";
import axios from 'axios';
import fetch from 'isomorphic-unfetch';

class Pages extends React.Component {
  state = {
    image: "", 
    name: "rei",
    user_id: "100"
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.image)

    axios.post("http://localhost:3001/pops", this.state.image)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  onChangeFile = e  => {
    const uploadfile = e.target.files.item(0);
    console.log('====================================');
    console.log(uploadfile);
    console.log('====================================');

    const formData = new FormData();
    formData.append('img_url', uploadfile);
    formData.append('name', '美人図鑑ポップ');
    formData.append('user_id', '3');

    console.log('====================================');
    console.log(formData);
    console.log('====================================');

    fetch('http://localhost:3001/pops', {method: 'POST', body: formData})
      .then(res => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
      })
      



  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        <input type="file" onChange={this.onChangeFile}/>
        <button onClick={() => uploadfile(this.props.dispatch, this.props.value.file)}>upload</button>
      </>
    );
  }
}

export default Pages;

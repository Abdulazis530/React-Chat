import React from 'react'

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', message: '' };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.add(this.state.name, this.state.message);
    this.setState({ name: "", message: "" }
    );
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit} className='inputForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-10'>
            <div className='row'>
            <div className='col-sm'>
              <input  className='form-control inputName' type="text" value={this.state.name} onChange={this.handleChangeName} placeholder='Insert Your Name Here' required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <input  className='form-control inputName' type="text" value={this.state.message} onChange={this.handleChangeMessage} placeholder='Say Something' />
            </div>
          </div>
            </div>
            <div className='col-sm'>
              <button type="submit" value="Send" className='btn btn-success btn-custom'  > <i className="fas fa-paper-plane fa-2x"></i> </button>
            </div>

          </div>
       
        </div>
      </form>
    );
  }
}
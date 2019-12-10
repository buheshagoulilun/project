import React from "react";
import {Grid, Row} from "react-flexbox-grid";
import {DatePicker, FlatButton, TextField, Snackbar} from "material-ui";
import "../../App.css";
const RowItemStyle = {
    alignItems: "center"
};

const buttonStyle = {
    marginTop: "6%"
};

class AddMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            file: '',
            imagePreviewUrl: ''
          };
          this._handleImageChange = this._handleImageChange.bind(this);
          this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }

    initialState = {
        name: '',
        price: '',
        showSnack: false
    };

    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleInputChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        this.setState({
            [inputName]: inputValue
        })
    }

    handleDate(e, date) {
        this.setState(function (prevState) {
            prevState.date = date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // validate form
        console.log("Added new Menu with" + JSON.stringify(this.state, null, 2));
        this.handleTouchTap();
        this.setState(this.initialState);
    }
  

    render() {
        let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }
        return (
          <div>
              
              <form>
                <Grid fluid>
                    <Row center="lg" style={RowItemStyle}>
                        <TextField
                            name="name"
                            hintText="Your recommended restaurant"
                            floatingLabelText="Menu Name"
                            onChange={this.handleInputChange}
                            required={true}
                            value={this.state.name}
                        />
                  
                    </Row>
                    <Row center="lg" style={RowItemStyle}>
                        <TextField
                            name="price"
                            type="number"
                            required={true}
                            hintText="Your rate"
                            floatingLabelText="Rate"
                            onChange={this.handleInputChange}
                            value={this.state.price}
                        />
                    </Row>
                    <Row center="lg" style={RowItemStyle}>
                        <DatePicker name="date"
                                    autoOk={true}
                                    required={true}
                                    hintText="Menu Add Date"
                                    container="inline"
                                    defaultDate={new Date()}
                                    onChange={this.handleDate}
                        />
                    </Row>
                    <Row center="lg" style={RowItemStyle}>
                        <form onSubmit={this._handleSubmit}>
                            <input type="file" onChange={this._handleImageChange} multiple />
              
              
                        </form>
                    </Row>
                </Grid>
                
                <FlatButton style={buttonStyle}
                            type="submit"
                            label="SUBMIT"
                            backgroundColor="#a4c639"
                            hoverColor="#8AA62F"
                            fullWidth={true}
                            onClick={this.handleSubmit}
                            
                />
                <Snackbar
                    open={this.state.open}
                    message="Menu Added!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </form>
            <div className="imagePreview" >
            {$imagePreview}
            </div>
            </div>
           
         
        );
        
    }
}

export default AddMenu;
import React from "react";

import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import {
  Button,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  ModalBody,
} from "reactstrap";

class GoogleMap extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      name: "",
      latitude: "",
      longitude: "",
    };
  }
  onMarkerClick = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  toggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  onFormSubmit = (e) => {
    const { name, longitude, latitude } = this.state;
    e.preventDefault();
    console.log(
      `Name : ${name}, Longitude : ${longitude}, Latitude : ${latitude}`
    );
    window.alert("The data is available in console");
    document.getElementById("modalForm").reset();
  };
  render() {
    return (
      <div className="googleMapContainer">
        <Map
          google={this.props.google}
          initialCenter={{ lat: 23.866267, lng: 90.389376 }}
          zoom={14}
        >
          <Marker
            onClick={this.onMarkerClick.bind(this)}
            name={"Current location"}
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>My space</h1>
            </div>
          </InfoWindow>
        </Map>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader toggle={this.toggle.bind(this)}>Your Input</ModalHeader>
          <ModalBody>
            <Form id="modalForm" onSubmit={this.onFormSubmit.bind(this)}>
              <FormGroup>
                <Label>Your name</Label>
                <Input
                  onChange={this.onInputChange.bind(this)}
                  type="text"
                  name="name"
                  placeholder="Name"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Longitude</Label>
                <Input
                  type="text"
                  name="longitude"
                  placeholder="Longitude"
                  onChange={this.onInputChange.bind(this)}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Latitude</Label>
                <Input
                  type="text"
                  name="latitude"
                  placeholder="Latitude"
                  onChange={this.onInputChange.bind(this)}
                ></Input>
              </FormGroup>
              <Button type="submit">Submit form</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyACK5VdDiYhnevWY0hjyReFreXSIpEU6jg",
})(GoogleMap);

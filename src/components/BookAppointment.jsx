import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Box,
  Button,
  useTheme,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function BookAppointment() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    phone: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentChannel: "",
    appointmentType: "",
    bookedDate: new Date(),
    address: "",
    patientBP: "",
    patientPlus: "",
    patientTemp: "",
    patientWeight: "",
    patientHeight: "",
    shortNote: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://dogsapi.onrender.com/data", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(formData);
    alert("Appointment created successfully");
    setFormData({
      title: "",
      name: "",
      phone: "",
      email: "",
      appointmentDate: "",
      appointmentTime: "",
      appointmentChannel: "",
      appointmentType: "",
      bookedDate: new Date(),
      address: "",
      patientBP: "",
      patientPlus: "",
      patientTemp: "",
      patientWeight: "",
      patientHeight: "",
      shortNote: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="grid"
        gridTemplateColumns={`repeat(3, 1fr)`}
        gridGap={theme.space[4]}
        width="80%"
        margin="auto"
        mt="50px"
      >
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            name="name"
            placeholder="Enter your name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            name="address"
            placeholder="Enter your Address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="appoinmentTitle">Appointment Title</FormLabel>
          <Input
            name="title"
            placeholder="Appointment Title"
            value={formData.title}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="dob">Appoinment Date</FormLabel>
          <Input
            name="appointmentDate"
            type="date"
            placeholder="Enter date of Appointment"
            value={formData.appointmentDate}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="time">Appoinment Time</FormLabel>
          <Input
            name="appointmentTime"
            type="time"
            placeholder="Enter Time of Appointment"
            value={formData.appointmentTime}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="select-field">Appoinment Channel:</FormLabel>
          <Select
            name="appointmentChannel"
            value={formData.appointmentChannel}
            onChange={handleChange}
          >
            <option value="Walk In">Walk In</option>
            <option value="By Phone Call">By Phone Call</option>
            <option value="By App">By App</option>
            <option value="By Email">By Email</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="select-field">Appoinment Type:</FormLabel>
          <Select
            name="appointmentType"
            value={formData.appointmentType}
            onChange={handleChange}
          >
            <option value="General check-up">General check-up</option>
            <option value="Follow-up">Follow-up </option>
            <option value="Emergency appointment">Emergency appointment</option>
            <option value="Special tests">Special tests</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Pbp">Patient BP</FormLabel>
          <Input
            name="patientBP"
            type="number"
            placeholder="Enter Patient BP"
            value={formData.patientBP}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Pp">Patient Pulse</FormLabel>
          <Input
            name="patientPlus"
            type="number"
            placeholder="Enter Patient Pulse"
            value={formData.patientPlus}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Ptemp">Patient Temperature</FormLabel>
          <Input
            name="patientTemp"
            type="temperature"
            placeholder="Enter Patient Temperature"
            value={formData.patientTemp}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Pweight">Patient Weight</FormLabel>
          <Input
            name="patientWeight"
            type="number"
            placeholder="Enter Patient Weight"
            value={formData.patientWeight}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Pheight">Patient Height</FormLabel>
          <Input
            name="patientHeight"
            type="number"
            placeholder="Enter Patient Pulse"
            value={formData.patientHeight}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Pshortnote">Short Note</FormLabel>
          <Input
            name="shortNote"
            type="text"
            placeholder="Enter Short Note"
            value={formData.shortNote}
            onChange={handleChange}
          />
        </FormControl>
      </Box>
      <Button
        type="submit"
        variantColor="teal"
        size="lg"
        display="flex"
        margin="auto"
        mt="50px"
        width="250px"
      >
        Submit
      </Button>
    </form>
  );
}
export default BookAppointment;

import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Flex, Table, Td, Tr, Thead, Tbody } from "@chakra-ui/react";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://dogsapi.onrender.com/data");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Flex justifyContent="center">
        <Table size="sm" mt="25px">
          <Thead>
            <Tr>
              <Td>Name</Td>
              <Td>Title</Td>
              <Td>Appointment Date</Td>
              <Td>Appointment Time</Td>
              <Td>Appointment Channel</Td>
              <Td>Appointment Type</Td>
              <Td>Booked Date</Td>
              <Td>Address</Td>
              <Td>Patient BP</Td>
              <Td>Patient Plus</Td>
              <Td>Patient Temp</Td>
              <Td>Patient Weight</Td>
              <Td>Patient Height</Td>
              <Td>Short Note</Td>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((appointment) => (
              <Tr key={appointment.id}>
                <Td>{appointment.name}</Td>
                <Td>{appointment.title}</Td>
                <Td>{appointment.appointmentDate}</Td>
                <Td>{appointment.appointmentTime}</Td>
                <Td>{appointment.appointmentChannel}</Td>
                <Td>{appointment.appointmentType}</Td>
                <Td>{appointment.bookedDate}</Td>
                <Td>{appointment.address}</Td>
                <Td>{appointment.patientBP}</Td>
                <Td>{appointment.patientPlus}</Td>
                <Td>{appointment.patientTemp}</Td>
                <Td>{appointment.patientWeight}</Td>
                <Td>{appointment.patientHeight}</Td>
                <Td>{appointment.shortNote}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Box>
  );
};

export default DataTable;

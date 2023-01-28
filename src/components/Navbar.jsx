import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      as={Flex}
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="linear-gradient(90deg, #6200EE 0%, #03DAC5 100%)"
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Text as="a" fontWeight="bold" fontSize="xl" color="white">
            Healing Hands Clinic
          </Text>
        </Link>
      </Flex>

      <Flex align="center" mr={5} justifyContent="flex-end">
        <Link to="/viewappointment">
          <Text
            as="a"
            mr={2}
            fontWeight="medium"
            bg="teal.500"
            color="white"
            p={2}
            rounded="md"
            _hover={{ bg: "teal.600" }}
          >
            View Appointments
          </Text>
        </Link>
        <Link to="/bookappointment">
          <Text
            as="a"
            mr={2}
            fontWeight="medium"
            bg="teal.500"
            color="white"
            p={2}
            rounded="md"
            _hover={{ bg: "teal.600" }}
          >
            Book Appointment
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
export default Navbar;

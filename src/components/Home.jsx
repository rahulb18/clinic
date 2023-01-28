import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  Button,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

function HomePage() {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.50", dark: "gray.800" };
  const textColor = { light: "black", dark: "white" };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="75vh"
    >
      <Heading color={textColor[colorMode]} mb={2}>
        Welcome to Healing Hands Clinic
      </Heading>
      <Text color={textColor[colorMode]} mb={4}>
        We are a team of dedicated healthcare professionals committed to
        providing the best possible care to our patients.
      </Text>
    </Flex>
  );
}

export default HomePage;

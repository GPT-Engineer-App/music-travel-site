import { Box, Flex, Heading, Text, Button, Image, VStack, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" color="white" minHeight="100vh">
      <Flex direction="column" align="center" justify="center" p={8}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwb24lMjBzdGFnZXxlbnwwfHx8fDE3MTQ2NjY1MzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Image" mb={4} />
        <Heading as="h1" size="2xl" mb={2}>
          The Rockers
        </Heading>
        <Text fontSize="xl" mb={6}>
          Join us on our world tour!
        </Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="red" size="lg">
          Get Tickets
        </Button>
        <VStack spacing={4} mt={10}>
          <Text fontSize="lg">Follow us on social media</Text>
          <Flex>
            <Link href="#" isExternal mx={2}>
              <FaInstagram size="28px" />
            </Link>
            <Link href="#" isExternal mx={2}>
              <FaTwitter size="28px" />
            </Link>
            <Link href="#" isExternal mx={2}>
              <FaFacebookF size="28px" />
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;

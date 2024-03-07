import { Box, Container, Heading, VStack, Text, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaPencilAlt, FaRocket } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const generateCode = () => {
    // Simulate code generation
    if (!input.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to generate code.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setOutput(`// Generated code for: ${input}\nconsole.log('Hello, ${input}!');`);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={2}>
            CodeGeneration.io <FaPencilAlt />
          </Heading>
          <Text fontSize="lg">Generate code snippets instantly with our AI-powered tool</Text>
        </Box>
        <Box>
          <Text mb={2}>Enter your description:</Text>
          <Input placeholder="Describe the function you need..." value={input} onChange={handleInputChange} />
        </Box>
        <Box>
          <Button leftIcon={<FaRocket />} colorScheme="teal" variant="solid" onClick={generateCode}>
            Generate Code
          </Button>
        </Box>
        <Box>
          <Text mb={2}>Generated Code:</Text>
          <Textarea value={output} placeholder="Your generated code will appear here..." isReadOnly />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

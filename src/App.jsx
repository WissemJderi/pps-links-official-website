import { Flex, Text, Button } from "@radix-ui/themes";
function App() {
  console.log("Print");
  return (
    <>
      <h1 className="text-2xl">PPS Links</h1>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
    </>
  );
}

export default App;

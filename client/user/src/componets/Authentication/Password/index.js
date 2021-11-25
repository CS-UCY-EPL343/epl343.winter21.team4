// Import useState hook from react
import { useState } from "react";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";

// Input Password Component
export default function Password() {
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Stack alignSelf="center">
        <Input
          variant="filed"
          type={passwordShown ? "text" : "password"}
          placeholder="Enter Password"
        />
        <Button h="1.75rem" size="sm" onClick={togglePassword}>
          {passwordShown ? "Hide" : "Show"}
        </Button>
      </Stack>
    </div>
  );
}

{
  /* <Button h="1.75rem" size="sm">
{show ? "Hide" : "Show"}
</Button> */
}

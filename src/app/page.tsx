import {Box, Button, Group, Stack, Text, Title} from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Stack align={"center"} justify={"center"} h={"100vh"} w={"100vw"}>
        <Box className={"text-center"}>
          <Title>Lesson Log</Title>
          <Text>Keep all your learning material in one place.</Text>
        </Box>
        <Group align={"flex-end"} mt={"lg"}>
          <Link href={"/login"}>
            <Button variant={"outline"}>Login</Button>
          </Link>
          <Link href={"/login"}>
            <Button variant={"gradient"}>Signup</Button>
          </Link>
        </Group>

      </Stack>
    </>
  );
}

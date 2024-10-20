import {Flex, Paper} from "@mantine/core";
import type {Metadata} from "next";
import cssClasses from "./auth.layout.module.css"


export const metadata: Metadata = {
  title: "Auth",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex justify={"center"} align={"center"} className={cssClasses.layout}>
      <Paper shadow={"xl"} p={"lg"} withBorder className={cssClasses.paper}>
        {children}
      </Paper>
    </Flex>

  );
}

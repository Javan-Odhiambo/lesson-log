"use client"

import {passwordRequestSchema} from "@/app/utils/scheme";
import urls from "@/app/utils/urls";
import {Anchor, Button, Stack, TextInput, Title} from "@mantine/core";
import {useForm} from "@mantine/form";
import {zodResolver} from "mantine-form-zod-resolver";
import Link from "next/link";
import React from 'react';
import {toast} from "sonner";
import {z} from "zod";

const PasswordResetPage = () => {

  const form = useForm<z.infer<typeof passwordRequestSchema>>({
    validate: zodResolver(passwordRequestSchema),
  });

  const onSubmit = (values: z.infer<typeof passwordRequestSchema>) => {
    console.log(values)
    // TODO: Consider just having a message on the form.
    toast.success("Password reset request sent to your email!")
  }
  return (
    <>
      <Title ta={"center"}>Send Reset Email</Title>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <TextInput
            label="Email to reset password"
            placeholder="john@gmail.com"
            withAsterisk
            {...form.getInputProps("email")}
          ></TextInput>
          <Button type={"submit"} variant={"filled"}>Send Reset Link</Button>
          <Anchor href={urls.LOGIN} component={Link}>Back to login</Anchor>
        </Stack>
      </form>
    </>
  );
};

export default PasswordResetPage;
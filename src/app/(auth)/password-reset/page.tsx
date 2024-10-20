"use client"

import {passwordResetSchema} from "@/app/utils/scheme";
import urls from "@/app/utils/urls";
import {Anchor, Button, PasswordInput, Stack, Title} from "@mantine/core";
import {useForm} from "@mantine/form";
import {zodResolver} from "mantine-form-zod-resolver";
import Link from "next/link";
import React from 'react';
import {toast} from "sonner";
import {z} from "zod";


const PasswordResetPage = () => {

  const form = useForm<z.infer<typeof passwordResetSchema>>({
    validate: zodResolver(passwordResetSchema),
  });

  const onSubmit = (values: z.infer<typeof passwordResetSchema>) => {
    console.log(values)
    toast.success("Password reset successfully!")
  }
  return (
    <>
      <Title ta={"center"}>Reset Password</Title>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <PasswordInput
            label="Password"
            withAsterisk
            {...form.getInputProps("password")}
          ></PasswordInput>
          <PasswordInput
            label="Confirm Password"
            withAsterisk
            {...form.getInputProps("confirmPassword")}
          ></PasswordInput>
          <Button type={"submit"} variant={"filled"}>Reset Password</Button>
          <Anchor component={Link} href={urls.LOGIN}>Back to login</Anchor>
        </Stack>
      </form>
    </>
  );
};

export default PasswordResetPage;
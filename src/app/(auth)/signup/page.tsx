"use client"
import {registerSchema} from "@/app/utils/scheme";
import urls from "@/app/utils/urls"
import {Anchor, Button, PasswordInput, Stack, TextInput, Title} from "@mantine/core";
import {useForm} from "@mantine/form";
import {zodResolver} from "mantine-form-zod-resolver";
import Link from "next/link";
import React from 'react';
import {toast} from "sonner";
import  {z} from "zod";

const SignupPage = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    validate: zodResolver(registerSchema),
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values)
    toast.success("Register successful!")
  }
  return (
    <>
      <Title className={"text-center"} variant={"luminance"}>Create Account</Title>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <TextInput
            label="First Name"
            placeholder="john@gmail.com"
            withAsterisk
            {...form.getInputProps("firstName")}
          ></TextInput>
          <TextInput
            label="Middle Name"
            placeholder="john@gmail.com"
            {...form.getInputProps("middleName")}
          ></TextInput>
          <TextInput
            label="Last Name"
            placeholder="Doe"
            withAsterisk
            {...form.getInputProps("lastName")}
          ></TextInput>
          <TextInput
            label="Email"
            placeholder="john@gmail.com"
            {...form.getInputProps("email")}
            withAsterisk
          ></TextInput>
          <PasswordInput
            label="Password"
            withAsterisk
            {...form.getInputProps("password")}
          ></PasswordInput>
          <Anchor component={Link} href={urls.LOGIN}>Already have an account?</Anchor>
          <Button type={"submit"} variant={"filled"}>Create Account</Button>
        </Stack>
      </form>
    </>

  );
};

export default SignupPage;
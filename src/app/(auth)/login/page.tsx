"use client"
import {SocialButtons} from "@/app/components/core/social-buttons";
import {loginSchema} from "@/app/utils/scheme";
import urls from "@/app/utils/urls";
import {Anchor, Button, Group, PasswordInput, Stack, Text, TextInput, Title} from "@mantine/core";
import {useForm} from "@mantine/form";
import {zodResolver} from 'mantine-form-zod-resolver';
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from 'react';
import {toast} from 'sonner'
import {z} from "zod";


const LoginPage = () => {

  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    initialValues: {email: "", password: ""},
    validate: zodResolver(loginSchema)
  })

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values)
    toast.success("Login successful!")

    router.push(urls.DASHBOARD);

  }
  return (
    <>
      <Title ta={"center"}>Welcome Back</Title>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <TextInput
            label="Email"
            placeholder="john@gmail.com"
            withAsterisk
            // key={form.key('email')}
            {...form.getInputProps("email")}
          ></TextInput>
          <PasswordInput
            label="Password"
            placeholder="password"
            withAsterisk
            // key={form.key('password')}
            {...form.getInputProps("password")}
          ></PasswordInput>
          <Button type={"submit"} variant={"filled"}>Login</Button>
          <Text ta={"center"}>or</Text>
          <SocialButtons/>
          <Group justify={"space-between"}>
            <Anchor component={Link} href={urls.SIGNUP}>Don't have an account?</Anchor>
            <Anchor component={Link} href={urls.PASSWORD_REQUEST}>Forgot Password?</Anchor>
          </Group>
        </Stack>
      </form>
    </>
  );
};

export default LoginPage;
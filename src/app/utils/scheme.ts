import {z} from "zod";

export const loginSchema = z.object({
  email: z.string({required_error: "Please enter your email."}).email({message: "Please enter a valid email"}),
  password: z.string({required_error: "Please enter your password"}),
})

export const registerSchema = z.object({
  firstName: z.string({required_error: "Please enter your first name."}),
  middleName: z.string().optional(),
  lastName: z.string({required_error: "Please enter your last name."}),
  email: z.string({required_error: "Please enter a valid email"}),
  password: z.string({required_error: "Please enter your password"}),
})

export const passwordRequestSchema = z.object({
  email: z.string({required_error: "Please enter your email"}).email({message: "Please enter a valid email"}),
})

export const passwordResetSchema = z.object({
  password: z.string({required_error: "Please enter your password"}),
  confirmPassword: z.string({required_error: "Please enter your password"}),
}).refine((data) => data.password === data.confirmPassword,
  {message: "Passwords do not match", path: ["confirmPassword"]})
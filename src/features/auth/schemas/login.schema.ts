import * as z from "zod";

export const loginSchema = z.object({
  userName: z
    .string()
    .min(2, "User Name should be at least 2 characters long")
    .max(50, "User Name should not exceed 50 characters"),

  password: z
    .string()
    .min(6, "Password should be at least 6 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password must contain uppercase and lowercase letters, numbers, and special characters"
    ),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

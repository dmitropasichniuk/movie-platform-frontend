import * as z from "zod";

export const loginSchema = z.object({
  userName: z
    .string()
    .min(2, "User Name повинно містити мінімум 2 символи")
    .max(50, "User Name не повинно перевищувати 50 символів"),

  password: z
    .string()
    .min(6, "Пароль повинен містити мінімум 6 символів")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Пароль повинен містити великі та малі літери, цифри та спец. символи"
    ),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

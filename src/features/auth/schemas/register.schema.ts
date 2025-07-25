import * as z from "zod";

export const registerSchema = z
  .object({
    userName: z
      .string()
      .min(2, "userName повинно містити мінімум 2 символи")
      .max(50, "userName не повинно перевищувати 50 символів"),

    password: z
      .string()
      .min(6, "Пароль повинен містити мінімум 6 символів")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Пароль повинен містити великі та малі літери, цифри та спец. символи"
      ),

    confirmPassword: z.string(),

    email: z.string().email("Неправильний формат email"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;

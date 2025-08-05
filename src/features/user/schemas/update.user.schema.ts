import * as z from "zod";

export const updateUserSchema = z.object({
  userName: z
    .string({ required_error: "userName must be a string" })
    .trim()
    .min(2, "userName must be at least 2 characters long")
    .max(50, "userName must not exceed 50 characters"),

  email: z
    .string({ required_error: "email must be a string" })
    .trim()
    .email("Invalid email format"),

  firstName: z
    .string({ required_error: "First name must be a string" })
    .trim()
    .nullable()
    .optional()
    .refine((val) => {
      if (val === null || val === undefined || val === "") return true;
      return val.length >= 2 && val.length <= 50;
    }, "First name must be between 2 and 50 characters or empty")
    .transform((val) => (!val || val === "" ? null : val)),

  lastName: z
    .string()
    .trim()
    .nullable()
    .optional()
    .refine((val) => {
      if (val === null || val === undefined || val === "") return true;
      return val.length >= 2 && val.length <= 50;
    }, "Last name must be between 2 and 50 characters or empty")
    .transform((val) => (!val || val === "" ? null : val)),

  phone: z
    .string()
    .trim()
    .nullable()
    .optional()
    .refine((val) => {
      if (val === null || val === undefined || val === "") return true;
      return /^\+380\d{9}$/.test(val);
    }, "Invalid phone number format")
    .transform((val) => (!val || val === "" ? null : val)),

  age: z
    .preprocess((val) => {
      if (
        val === null ||
        val === "" ||
        (typeof val === "string" && val.trim() === "") ||
        (typeof val === "number" && isNaN(val))
      ) {
        return null;
      }
      return val;
    }, z.union([z.null(), z.coerce.number({ invalid_type_error: "Age must be a valid number" })]))
    .refine((val) => {
      if (val === null) return true;
      return val >= 1 && val <= 120;
    }, "Age must be between 1 and 120 years"),
});

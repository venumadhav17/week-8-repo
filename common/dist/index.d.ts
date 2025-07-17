import { z } from "zod";
declare const signupInput: z.ZodObject<
  {
    username: z.ZodString;
    password: z.ZodString;
  },
  z.core.$strip
>;
export type SignupParams = z.infer<typeof signupInput>;
export {};

import { z } from "zod";

export const RestaurantSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  cuisines: z.array(z.string().min(1)),
});

export const RestaurantDetailsSchema = z.object({
  links: z.array(
    z.object({
      name: z.string().min(1),
      url: z.string().min(1),
    })
  ),
  contact: z.object({
    phone: z.string().min(1),
    email: z.string().email(),
  }),
});

export type Restaurant = z.infer<typeof RestaurantSchema>;
export type RestaurantDetails = z.infer<typeof RestaurantDetailsSchema>;

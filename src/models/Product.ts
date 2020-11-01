import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  price: number,
  type: 'Roller derby skates' | 'Retro Skates & Disco Roller',
  count: number,
  image: string
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  type: Yup.string(),
  count: Yup.number(),
  image: Yup.string()
});

import * as Yup from 'yup';

export enum SKATE_TYPES {
  DERBY = 'Roller derby skates',
  RETRO = 'Retro Skates & Disco Roller'
}

export type Product = {
  id: string,
  title: string,
  description: SKATE_TYPES,
  price: number,
  image: string,
  count: number
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  count: Yup.number().required(),
  image: Yup.string()
});

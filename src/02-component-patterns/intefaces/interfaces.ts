import { ReactElement } from "react";
import { Props as ProductCardProps, Props } from '../components/ProductCard';
import { Props as PoductTitleProps } from '../components/ProductTitle';
import { Props as PoductImageProps } from '../components/ProductImage';
import { Props as PoductButtonsProps } from '../components/ProductButtons';




export interface Product{
    id: string;
    title:string;
    img?: string;
}

export interface ProductContextProps{
    counter: number;
    incrementar: (value:number) => void;
    product:Product;
}

export interface ProductCardHOCProps{
    ({ product, children }: ProductCardProps) : JSX.Element,
    Title:(Props: PoductTitleProps) => JSX.Element,
    Image: (Props: PoductImageProps) => JSX.Element,
    Buttons:(Props: PoductButtonsProps) => JSX.Element
}

export interface onChangeArgs{
    product:Product,
    count:number
}


export interface ProductInCart extends Product{
    count:number
  }
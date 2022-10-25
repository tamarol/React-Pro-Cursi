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
    maxCount?: number
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

  export interface InitialValues{
    count?:number;
    maxCount?:number;
  }

  export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?:number;
    product: Product;

    increaseBy: (value:number) => void;
    reset: () => void;
  }
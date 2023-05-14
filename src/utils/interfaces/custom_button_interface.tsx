import { ButtonHTMLAttributes } from "react";

export interface CustomButtonInterface
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode ;
}

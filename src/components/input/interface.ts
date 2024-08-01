import { ChangeEvent } from "react";

export interface IInputComponent {
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

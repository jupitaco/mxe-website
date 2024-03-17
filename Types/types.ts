import { ReactNode } from 'react';

export interface IAccordion {
  action: () => void;
  toggle: { [key: number]: boolean };
  id: number;
  question: string;
  title: string;
  subTitle: string;
  desc: ReactNode;
  subDesc: string;
}

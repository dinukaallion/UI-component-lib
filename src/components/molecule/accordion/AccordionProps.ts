// src/components/AccordionProps.ts
import { ReactNode } from 'react';

export interface AccordionProps {
  title: string;
  content: ReactNode;
  expanded?: boolean;
  disabled?: boolean;
}

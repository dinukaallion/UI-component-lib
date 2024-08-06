import { ReactNode } from 'react';

export interface AppBarProps {
  title: string;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'transparent';
  children?: ReactNode;
}

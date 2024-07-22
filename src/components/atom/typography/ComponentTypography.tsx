import React from 'react';
import { handleTypography } from './Typography.handler';

interface ComponentTypographyProps {
  /** Content Type for the typography */
  content: string;
  /** Type of typography*/
  type: string;
}

/**
 * Props for the ComponentTypography component.
 */
 const ComponentTypography: React.FC<ComponentTypographyProps> = ({ content, type }) => {
  return <>{handleTypography(content, type)}</>;
};

export default ComponentTypography;

import React from 'react';
import { Programs } from '../components/Programs';

export const ProgramsPage = () => {
  return (
    <div className="pt-20">
      <Programs isPreview={false} />
    </div>
  );
};

export default ProgramsPage;

import React from 'react';

import reactGaEvent from '../../utils/reactGaEvent';

const Page1: React.FC = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <button
        type='button'
        onClick={() =>
          reactGaEvent({
            category: 'Button event',
            action: 'Button event on page 1',
            label: 'Page 1 event',
          })
        }
      >
        Trigger Event 1
      </button>
    </div>
  )
};

export default Page1;
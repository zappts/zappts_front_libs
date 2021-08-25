import React from 'react';

import reactGaEvent from '../../utils/reactGaEvent';

const Page1: React.FC = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <button
        type='button'
        onClick={() =>
          reactGaEvent({
            category: 'Button event',
            action: 'Button event on page 2',
            label: 'Page 2 event',
          })
        }
      >
        Trigger Event 2
      </button>
    </div>
  )
};

export default Page1;
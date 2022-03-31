import * as React from 'react';

type Props = {
  label: string;
  count: number;
};

export const FCCounter: React.FC<Props> = props => {
  const { label, count } = props;

  const handleIncrement = () => {
    // onIncrement();
  };

  return (
    <div>
      <span>
        {label}: {count}
      </span>
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
  );
};
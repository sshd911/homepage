import React, { FC , useState } from 'react';

const Archive: FC<{ isActive: Boolean; changeIsActive: (n: Boolean) => void }> = ({
  isActive,
  changeIsActive,
}) => {
  return (
    <>
      <div className={ isActive ? 'hidden' : 'bg-white bg-opacity-5 rounded-lg mx-4 my-8' }>
        <div className="mx-4 my-8 container flex justify-end">
          {/* TODO */}
        </div>
      </div>
    </>
  );
};

export default Archive

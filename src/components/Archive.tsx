import React, { FC } from 'react';

const Archive: FC<{ show: Number }> = ({ show }) => {
  return (
    <>
      <div
        className={
          show === 1 ? 'hidden' : 'bg-white bg-opacity-5 rounded-lg mx-4 my-8'
        }
      >
        <div className="mx-4 my-8 container flex justify-end">
          {/* <!-- TODO --> */}
        </div>
      </div>
    </>
  );
};

export default Archive;

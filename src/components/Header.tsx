import React, { FC } from 'react';

const shadow: { [key: string]: string } = {
  boxShadow: '0px 0px 0px 2px #0a0a0a',
};

const Header: FC<{ isActive: Boolean; changeIsActive: (n: Boolean) => void }> = ({
  isActive,
  changeIsActive,
}) => {
  return (
    <>
      <div className="md:mx-4">
        <div className="container flex justify-end">
          <div className="mx-4 my-8 container flex justify-end">
            <button
              onClick={() => changeIsActive(false)}
              style={shadow}
              className={
                isActive
                  ? 'mx-1 inline-block px-[1.2em] py-[0.5em] bg-[#6f6f6f] text-[#fff] border-solid border-[#a7a7a7] border-[2px] border-r-[#5a5b5b] border-b-[#5a5b5b]'
                  : 'mx-1 inline-block px-[1.2em] py-[0.5em] text-[#fff] border-solid border-[2px] bg-[#7e88bf] border-[#c1cbff] border-r-[#5c659d] border-b-[#5c659d]'
              }
            >
              Archives
            </button>
            <button
              onClick={() => changeIsActive(true)}
              style={shadow}
              className={
                isActive
                  ? 'mx-1 inline-block px-[2em] py-[0.5em] text-[#fff] border-solid border-[2px] bg-[#7e88bf] border-[#c1cbff] border-r-[#5c659d] border-b-[#5c659d]'
                  : 'mx-1 inline-block px-[2em] py-[0.5em] bg-[#6f6f6f] text-[#fff] border-solid border-[#a7a7a7] border-[2px] border-r-[#5a5b5b] border-b-[#5a5b5b]'
              }
            >
              About
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

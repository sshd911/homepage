import React, { FC } from 'react';
import personSVG from './../../public/assets/svg/person.svg';
import activitySVG from './../../public/assets/svg/activily.svg';
import morterboardSVG from './../../public/assets/svg/morterboard.svg';

const About: FC<{ show: Number }> = ({ show }) => {
  return (
    <>
      <div className={show === 0 ? "hidden" : "bg-white bg-opacity-5 rounded-lg mx-4 my-8"}>
        <div className="flex flex-col text-white p-4">
          <div className="flex flex-col">
            <div className="text-xl">
              <img
                className="inline w-[15px] h-[15px] mr-2"
                src={personSVG}
                alt=""
              />
              <div className="inline mr-2">Sho Maeda</div>
              <div className="md:inline inline-block font-thin text-xs">
                University Student / Web Developer
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div>
              <img
                className="inline w-[15px] h-[15px] mr-2"
                src={activitySVG}
                alt=""
              />
              Work
            </div>
            <div>Hi, there! Thanks for coming here!</div>
            <div>
              I'm a japanese student at Chuo University majoring in literature,
              and develop web.
            </div>
          </div>
          <div className="pt-4">
            <div>
              <img
                className="inline w-[15px] h-[15px] mr-2"
                src={morterboardSVG}
                alt=""
              />
              Bio
            </div>
            <div>2002/9 Born in Saitama, Japan</div>
            <div>2021/4 Into Chuo University</div>
            <div>2022/3 AWS Certified Solutions Architect - Associate</div>
            <div>2022/4 Web Developer Internship</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

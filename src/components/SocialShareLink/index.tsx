import React from 'react';

function SocialShareLink(props: {
  tooltip: string;
  children: JSX.Element;
  link: string;
  className?: string;
}) {
  const { tooltip, link, className, children } = props;

  return (
    <div className="h-fit relative flex flex-col items-center group">
      <div
        className={`${className != undefined && className} hover:cursor-pointer text-gray-400 hover:text-black-700`}
        onClick={() => {
          window.open(
            link,
            'sharer',
            'toolbar=0,status=0,width=548,height=325'
          );
        }}
      >
        {children}
      </div>
      <div className="w-32 absolute bottom-0 flex-col items-center mb-8 hidden group-hover:flex transition ease-out">
        <span className="relative z-10 p-2 text-xs text-white-0 bg-black-700 shadow-lg rounded-md">
          {tooltip}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black-500"></div>
      </div>
    </div>
  );
}

export default SocialShareLink;

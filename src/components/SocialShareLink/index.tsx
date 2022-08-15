import React from 'react';

function SocialShareLink(props: {
  tooltip: string;
  children: JSX.Element;
  link?: string;
  className?: string;
}) {
  const { tooltip, link, className, children } = props;

  return (
    <div className="relative flex flex-col items-center group">
      <div
        className={`${className} hover:cursor-pointer text-gray-400 hover:text-black-700`}
        onClick={() => {
          if (link) {
            window.open(
              link,
              'sharer',
              'toolbar=0,status=0,width=548,height=325'
            );
          } else {
            navigator.clipboard.writeText(window.location.href);
          }
        }}
      >
        {children}
      </div>
      <div className="w-32 absolute bottom-0 flex-col items-center opacity-0 mb-8 hidden sm:flex group-hover:opacity-100 transition ease-out delay-150">
        <span className="relative z-10 p-2 text-xs text-white-0 bg-black-700 shadow-lg rounded-md">
          {tooltip}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black-500"></div>
      </div>
    </div>
  );
}

export default SocialShareLink;

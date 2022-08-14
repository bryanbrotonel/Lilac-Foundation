import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface DonateButtonProps {
  color?: String;
  fontSize?: String;
  bgColor?: String;
}

const defaultProps: DonateButtonProps = {
  color: 'white-0',
  fontSize: 'md',
  bgColor: 'bg-primary-800',
};

function DonateButton(props?: DonateButtonProps) {
  const { fontSize, bgColor, color } = props;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={`py-2 px-4 text-${color} text-${fontSize} ${bgColor} rounded-lg`}
    >
      <a className="subpixel-antialiased" href="#">
        <div className="flex items-center">
          <AiOutlineHeart
            className={`${isHovering ? 'hidden' : 'inline-block'}`}
          />
          <AiFillHeart
            className={`${isHovering ? 'inline-block' : 'hidden'}`}
          />
          <span>&ensp;Donate</span>
        </div>
      </a>
    </button>
  );
}

DonateButton.defaultProps = defaultProps;

export default DonateButton;

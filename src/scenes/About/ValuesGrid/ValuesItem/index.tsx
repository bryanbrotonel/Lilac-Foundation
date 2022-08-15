import React from 'react';
import { GiFlowerEmblem } from 'react-icons/gi';

function ValuesItem(props: { title: string; description: string }) {
  const { title, description } = props;

  return (
    <div>
      <h1 className="font-sans font-bold text-2xl text-black-700">
        <div className="flex items-center mb-4">
          <GiFlowerEmblem />
          <span>&nbsp;{title}</span>
        </div>
      </h1>
      <p className="prose prose-lg">{description}</p>
    </div>
  );
}

export default ValuesItem;

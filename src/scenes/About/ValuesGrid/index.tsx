import React from 'react';
import ValuesItem from './ValuesItem';

function ValuesGrid(props: { values: string }) {
  const { values } = props;

  return (
    <div className="md:w-11/12 mx-auto p-12 mt-12 mb-36 bg-gray-100">
      <h1 className="mb-12 font-serif text-4xl text-primary-700">
        Core Values
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ValuesItem
          title="Integrity"
          description="To always be honest, transparent and ethical with our goals, transactions, and decisions"
        />
        <ValuesItem
          title="Motivated"
          description="To doing our best in everything we do, express resilience and settling for nothing other than perfection"
        />
        <ValuesItem
          title="Passion"
          description="Which serves as the heart of our foundation, which leads our drive to engage and inspire Lilanians"
        />
        <ValuesItem
          title="Service"
          description="By augmenting the lives of those in need in order to achieve Lila’s long-term goals"
        />
        <ValuesItem
          title="United"
          description="To convey the essence of “Bayanihan”; a cooperative endeavour, hand-in-hand, selfless act of mutual cooperation for the public good"
        />
      </div>
    </div>
  );
}

export default ValuesGrid;

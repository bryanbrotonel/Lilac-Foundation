import React from 'react';
import Markdown from 'markdown-to-jsx';
import { GoQuote } from 'react-icons/go';

function BlockQuote(props: { quote: string; title: string }) {
  const { quote, title } = props;

  return (
    <div className="bg-gray-100 w-fit p-12">
      <blockquote className="relative mt-6">
        <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-12 text-gray-200">
          <GoQuote size={70} />
        </div>
        <div className="relative z-10">
          <div className="font-serif italic text-4xl w-fit bg-primary-50/30">
            <Markdown>{quote}</Markdown>
          </div>
        </div>
      </blockquote>
    </div>
  );
}

export default BlockQuote;

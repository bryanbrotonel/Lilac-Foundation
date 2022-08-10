import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const params = useParams();

  return (
    <React.Fragment>
      <div className="relative bg-secondary py-12">
        <div className="container">
          <div className="w-full max-w-prose lg:text-xl aspect-video mx-auto mb-12 bg-primary-50 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src="http://images.ctfassets.net/s85q1dv8e3m5/4X1ygyn1uSshcrJvMPYNty/55fe6e9de21854911a28ef4b892b5337/aptopix-philippines-asia-typhoon.webp?fm=webp"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="prose lg:prose-xl prose-invert mx-auto">
            <h1 className="font-serif !mb-0">{params.postId}</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem est fuga esse.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="max-w-prose lg:text-xl mx-auto my-6">
          <span>
            <span className="font-bold">Author</span>&nbsp;&#124;&nbsp;9 March,
            2022
          </span>
          <div className="mt-4">
            <span>
              Twitter&nbsp;&#124;&nbsp;Facebook&nbsp;&#124;&nbsp;LinkedIn
            </span>
          </div>
        </div>
        <div className="prose prose-slate lg:prose-xl mx-auto mb-129">
          <hr className="border-white-30" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta hic
            quos soluta porro? Laboriosam, enim magnam corporis molestiae
            suscipit tempora, iste nesciunt ex voluptates provident, quo
            deleniti modi nihil ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque esse
            nesciunt tenetur ipsa tempora laboriosam quibusdam nam voluptas,
            quidem recusandae sint ratione soluta sequi consequuntur maxime cum
            nemo temporibus adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque esse
            nesciunt tenetur ipsa tempora laboriosam quibusdam nam voluptas,
            quidem recusandae sint ratione soluta sequi consequuntur maxime cum
            nemo temporibus adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta hic
            quos soluta porro? Laboriosam, enim magnam corporis molestiae
            suscipit tempora, iste nesciunt ex voluptates provident, quo
            deleniti modi nihil ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque esse
            nesciunt tenetur ipsa tempora laboriosam quibusdam nam voluptas,
            quidem recusandae sint ratione soluta sequi consequuntur maxime cum
            nemo temporibus adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque esse
            nesciunt tenetur ipsa tempora laboriosam quibusdam nam voluptas,
            quidem recusandae sint ratione soluta sequi consequuntur maxime cum
            nemo temporibus adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta hic
            quos soluta porro? Laboriosam, enim magnam corporis molestiae
            suscipit tempora, iste nesciunt ex voluptates provident, quo
            deleniti modi nihil ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque esse
            nesciunt tenetur ipsa tempora laboriosam quibusdam nam voluptas,
            quidem recusandae sint ratione soluta sequi consequuntur maxime cum
            nemo temporibus adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque esse
            nesciunt tenetur ipsa tempora laboriosam quibusdam nam voluptas,
            quidem recusandae sint ratione soluta sequi consequuntur maxime cum
            nemo temporibus adipisci?
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogPost;

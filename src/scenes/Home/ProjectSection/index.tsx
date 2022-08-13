import React from 'react';

function ProjectSection() {
  return (
    <div className="container py-24">
      <div className="flex flex-col md:flex-row-reverse gap-8">
        <div className="w-full md:w-4/6 aspect-[3/2] mx-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1660421716577-c3ef88a85431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Project Image"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-center">
          <div className="mb-2">
            <span className="font-sans font-bold text-gray-500 uppercase">
              Latest Proejct
            </span>
          </div>
          <h1 className="mb-4 text-5xl font-serif">Project Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            possimus unde perferendis similique ipsam nulla molestias sed.
            Explicabo, repudian...
          </p>
          <div className="mt-8">
            <a
              href="#"
              className=" uppercase hover:underline underline-offset-2"
            >
              <button className="py-1 px-3 bg-transparent hover:bg-primary-400 text-primary-400 hover:text-white-0 rounded-lg border-primary-400 border-2">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;

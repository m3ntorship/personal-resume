import React from 'react';

export const UpdatedPosts = () => {
  return (
    <div className="w-main-container m-auto">
      <h1 className="text-center text-xxlg">Get Every Updates</h1>
      <div className="bg-c400 w-1/3 p-6">
        <h2 className=" text-lg">
          Meet Inclusive Front-End Design Patterns A New Smashing Book
        </h2>
        <img
          src="https://picsum.photos/500/400"
          alt="Post update"
          className="rounded-md my-8"
        />
        <div>
          <figure className="flex items-center ">
            <img
              src="https://picsum.photos/300/200"
              alt="Profile"
              className="w-10 h-10 inline rounded-full mr-4"
            />
            <figcaption className="inline">Eslam Hesham</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

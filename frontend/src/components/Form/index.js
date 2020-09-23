import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';
import { Heading, HEADING_OPTIONS } from '../shared/heading';
import { Button } from '../shared/button';
import { Container, CONTAINER_OPTIONS } from '../shared/container/index';

const Form = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    API('/footer').then(({ data }) => {
      setData(data);
    });
  }, []);
  if (data) {
    return (
      <Container
        isBgGray={true}
        padding={CONTAINER_OPTIONS.PADDING.BIG}
        margin={CONTAINER_OPTIONS.MARGIN.TOP}
      >
        <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <figure>
            <img
              src={data.contactPic}
              alt="Contact Us"
              className="hidden md:block w-full h-full"
            />
          </figure>
          <div>
            <form>
              <Heading
                as="h2"
                color={HEADING_OPTIONS.COLOR.PRIMARY}
                className="mb-12 whitespace-no-wrap "
              >
                Get In Touch
              </Heading>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-c400 border-b-2 border-c300 py-4 px-4 mb-3  focus:outline-none "
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full  bg-c400 border-b-2 border-c300 py-4 px-4  focus:outline-none "
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-4">
                  <input
                    className="appearance-none block w-full  bg-c400 border-b-2 border-c300 py-4 px-4 mb-3 focus:outline-none  "
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 ">
                  <textarea
                    className=" w-full resize-none bg-c400 border-b-2 border-c300 p-4 mb-3 focus:outline-none "
                    type="text"
                    placeholder="ًWrite your message"
                    rows="8"
                  />
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div>
                  <Button
                    rounded={false}
                    customClassNames="my-4 block w-56 h-16 uppercase"
                    bgColor="c100"
                  >
                    Send message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    );
  } else {
    return 'Data Broken';
  }
};

export default Form;

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import useObserver from "../useObserver";

const Test = () => {
  const itemRef = useRef<HTMLDivElement>(null);

  const { isView } = useObserver(itemRef, 0.5);

  const img: string[] = [
    "https://lwi.nexon.com/mintrocket/brand/bg/bg1.png",
    "https://lwi.nexon.com/mintrocket/brand/bg/bg2.png",
    "https://lwi.nexon.com/mintrocket/brand/bg/bg3.png",
    "https://lwi.nexon.com/mintrocket/brand/bg/bg4.png",
  ];

  const [currPage, setCurrPage] = useState<number>(0);

  useEffect(() => {
    if (itemRef) console.log(itemRef);

    console.log(isView);
  }, [itemRef, isView]);

  const next = () => {
    if (currPage === img.length - 1) {
      setCurrPage(0);
    } else {
      setCurrPage((prev) => prev + 1);
    }
  };
  const prev = () => {
    if (currPage === 0) {
      setCurrPage(img.length - 1);
    } else {
      setCurrPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
      <Div>
        {img.map((data, index: number) => (
          <React.Fragment key={index}>
            <Item
              ref={itemRef}
              img={data}
              curr_page={currPage}
              curr_page_check={currPage === index}
            >
              <Content delay={0} is_view={currPage === index}>
                {index}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Content>

              <Content delay={0.3} is_view={currPage === index}>
                Iste provident omnis perferendis, tempora, harum aut voluptates
                accusantium nam eius voluptatem consequatur ratione labore!
              </Content>

              <Content delay={0.6} is_view={currPage === index}>
                Dicta rerum autem facilis consequatur dignissimos quas!
              </Content>
            </Item>
          </React.Fragment>
        ))}
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 300px;
  height: 600px;
  background-color: black;

  position: relative;
  overflow: hidden;
`;

const Item = styled.div<{
  img: string;
  curr_page: number;
  curr_page_check: boolean;
}>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 20px;

  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: 0.5s;

  transform: ${(props) => `translateY(-${props.curr_page}00%)
  `};

  /* transition: ${(props) => (props.curr_page_check ? "0.5s" : "0s")}; */
  /* position: absolute; */
  /* opacity: ${(props) => (props.curr_page_check ? 1 : 0)}; */
  /* z-index: ${(props) => (props.curr_page_check ? 1 : 0)}; */

  color: white;
`;

const Content = styled.div<{ delay: number; is_view: boolean }>`
  transition: ${(props) => (props.is_view ? "0.5s" : "0s")};
  transition-delay: ${(props) =>
    props.is_view ? `calc(${props.delay}s + 0.5s)` : "0s"};
  transform: ${(props) =>
    props.is_view ? "translateY(0px)" : "translateY(-10px)"};
  opacity: ${(props) => (props.is_view ? 1 : 0)};
`;

export default Test;

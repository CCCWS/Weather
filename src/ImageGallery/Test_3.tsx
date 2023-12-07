import React, { useState } from "react";
import styled from "styled-components";

const Test_3 = () => {
  const imgArr: string[] = [
    "https://ae04.alicdn.com/kf/Sf2df4fd68f8b46b3ace7a8e5835ce5faX/11-Models-Dancing-Cat-Figure-Decoration-Animation-Cat-Model-Fashion-Toy-Enchanting-Cat-Capsule-Toy-Doll.jpg_220x220xz.jpg_.webp",
    "https://ae04.alicdn.com/kf/Sa1d1e1c5b5fc489ba44fbaf618aa481dI/11-Models-Dancing-Cat-Figure-Decoration-Animation-Cat-Model-Fashion-Toy-Enchanting-Cat-Capsule-Toy-Doll.jpg_220x220xz.jpg_.webp",
    "https://ae04.alicdn.com/kf/S11197c8093474556966f451d900554e7y/11-Models-Dancing-Cat-Figure-Decoration-Animation-Cat-Model-Fashion-Toy-Enchanting-Cat-Capsule-Toy-Doll.jpg_220x220xz.jpg_.webp",
    "https://ae04.alicdn.com/kf/S256fbea649fb4722852444ec3fd6ae0fj/11-Models-Dancing-Cat-Figure-Decoration-Animation-Cat-Model-Fashion-Toy-Enchanting-Cat-Capsule-Toy-Doll.jpg_220x220xz.jpg_.webp",
    "https://ae04.alicdn.com/kf/Sb1dc384f38174548bcd618732cc328123/11-Models-Dancing-Cat-Figure-Decoration-Animation-Cat-Model-Fashion-Toy-Enchanting-Cat-Capsule-Toy-Doll.jpg_220x220xz.jpg_.webp",
    "https://ae04.alicdn.com/kf/S08ff694a5523403cae53b773ed75fad5w/11-Models-Dancing-Cat-Figure-Decoration-Animation-Cat-Model-Fashion-Toy-Enchanting-Cat-Capsule-Toy-Doll.jpg_220x220xz.jpg_.webp",
  ];

  const [currImg, setCurrImg] = useState<number>(0);

  return (
    <Box>
      <ImgBox currImg={currImg}>
        <div>
          {imgArr.map((data, index) => (
            <Img key={index} src={data}></Img>
          ))}
        </div>

        <BtnBox>
          {imgArr.map((data, index) => (
            <ImgBtn key={index} onMouseEnter={() => setCurrImg(index)}>
              {index}
            </ImgBtn>
          ))}
        </BtnBox>
      </ImgBox>
    </Box>
  );
};

const Box = styled.div`
  margin: 50px;

  width: 300px;
  height: 500px;
  background-color: white;

  padding: 20px;

  border-radius: 20px;
`;

const ImgBox = styled.div<{ currImg: number }>`
  width: 260px;
  height: 260px;
  background-color: red;
  border-radius: inherit;
  overflow: hidden;
  position: relative;

  & > :first-child {
    /* transition: 0.5s; */
    transform: ${(props) => `translateX(-${props.currImg}00%)`};
    display: flex;
  }
`;

const Img = styled.img.attrs({ alt: "CAT" })`
  min-width: 100%;
  height: 100%;
`;

const BtnBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  display: flex;
  opacity: 0;
`;
const ImgBtn = styled.button`
  width: 100%;
  height: 100%;
`;

export default Test_3;

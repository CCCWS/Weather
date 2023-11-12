import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Test_2 = () => {
  const data = {
    url: "https://blog.ko.playstation.com/tachyon/sites/9/2023/11/79d239ccb6e907b61737cf12ff94400432feb0ea-scaled.jpg?resize=1088,612&crop_strategy=smart",
    title: "용과 같이7 외전 이름을 지운 자』오늘 발매!",
    description:
      "키류 카즈마의 시점에서 『용과 같이6 생명의 시』 이후의 공백기를 그린 신작 『용과 같이7 외전』이 출시되었습니다. 진화한 배틀 액션과 새로운 스테이지는 물론, 몰입 요소가 가득한 플레이 스폿도 그대로입니다. ■키류 카즈마의 시점에서 그리는 공백기 이야기 무엇을 더 잃어야, 소중한 사람을 지킬 수 있는가 사랑하는 이들을 지키기 위해 죽음을 위장하고 자신의 삶을 버려야 했던 전설의 야쿠자 키류 카즈마. 지금은 다이도지 일파의 요원이 되어 「죠류」라는 코드 네임으로 활동하고 있다. 그런 키류에게 요코하마항의 금괴 밀수 거래 현장을 지키라는 새로운 지령이 내려왔다. 다이도지 일파의 입장에서는 작은 수입원에 지나지 않는 극히 간단한 임무였다. 주변에는 다이도지 동료 요원들도 다수 대기하고 있는 상황. 하지만 일찍이 야쿠자로서 동성회 4대 회장까지 올랐던 이력을 가진 키류는 다이도지의 요원들 사이에서도 이질적인 존재로 여겨졌다.",
  };

  return (
    <Div>
      <Img url={data.url} />

      <Description>
        <div>
          <h3>{data.title}</h3>
          <p>{data.description.slice(0, 100) + "..."}</p>
        </div>

        <Post>
          <PostIcon
            url={
              "https://blog.ko.playstation.com/tachyon/sites/9/2020/06/avatar-blog-psf.jpg"
            }
          />

          <div>
            <p>PlayStation 커뮤니티 매니저</p>
            <p>Nov 09, 2023</p>
          </div>
        </Post>
      </Description>
    </Div>
  );
};

const Img = styled.div<{ url: string }>`
  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 40%;

  transition: 0.3s;
  border-radius: inherit;
  box-shadow: 0px 3px 4px 3px #494949;
`;

const Div = styled.div`
  width: 330px;
  height: 450px;
  background-color: white;

  border-radius: 10px;
  padding: 10px;

  margin: 50px;

  transition: 0.3s;
  box-shadow: 0px 0px 10px 1px #a3a3a3;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 15px 1px #a3a3a3;

    ${Img} {
      box-shadow: 0px 3px 8px 3px #494949;
    }
  }
`;

const Description = styled.div`
  width: 100%;
  height: 60%;
  /* background-color: white; */
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 14px;
  }

  & > :first-child p {
    font-size: 12px;
    color: #6b6b6b;
  }
`;

const Post = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  gap: 0px 10px;

  p {
    font-size: 12px;
  }
`;

const PostIcon = styled.div<{ url: string }>`
  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 40px;
  height: 40px;
`;

export default Test_2;

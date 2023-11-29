import React, { useEffect } from "react";
import styled from "styled-components";

const Test_3 = () => {
  useEffect(() => {
    const word = "aabbaccc";

    const compression = (word: any) => {
      let answer = word.length;
      for (let i = 1; i <= word.length / 2; i++) {
        let countWord = "";
        let newWord = "";
        let count = 1;
        for (let j = 0; j <= word.length - 1; j += i) {
          if (word.slice(j, j + i) === word.slice(j + i, j + i * 2)) {
            count++;
            countWord = count + word.slice(j, j + i);
          } else {
            if (countWord) {
              newWord += countWord;
            } else {
              newWord += word.slice(j, j + i);
            }
            count = 1;
            countWord = "";
          }
        }
        // answer = answer.length > newWord.length ? newWord : answer;
        answer = answer > newWord.length ? newWord.length : answer;
      }
      console.log(answer);
    };

    const keyPad = (number: number[], hand: string) => {
      const pad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
      ];

      let currL = [3, 0];
      let currR = [3, 2];
      let answer: string = "";

      for (let i of number) {
        if (i === 1 || i === 4 || i === 7) {
          currL = [(i - 1) / 3, 0];
          answer += "L";
        }

        if (i === 3 || i === 6 || i === 9) {
          currR = [Math.floor((i - 1) / 3), 2];
          answer += "R";
        }

        if (i === 2 || i === 5 || i === 8 || i === 0) {
          let temp: number[] = [];
          for (let index in pad) {
            if (pad[index].findIndex((v) => v === i) !== -1) {
              temp = [
                parseInt(index, 10),
                pad[index].findIndex((v) => v === i),
              ];
            }
          }

          const LeftDistance =
            Math.abs(currL[0] - temp[0]) + Math.abs(currL[1] - temp[1]);

          const RightDistance =
            Math.abs(currR[0] - temp[0]) + Math.abs(currR[1] - temp[1]);

          if (LeftDistance === RightDistance) {
            if (hand === "right") {
              currR = temp;
              answer += "R";
            } else {
              currL = temp;
              answer += "L";
            }
          }

          if (LeftDistance > RightDistance) {
            currR = temp;
            answer += "R";
          }

          if (LeftDistance < RightDistance) {
            currL = temp;
            answer += "L";
          }
        }
      }

      return answer;
    };

    const infomation = (today: any, terms: any, privacies: any) => {
      // console.log(new Date(today).getFullYear());

      const newTerms = [];
      const answer = [];

      for (let i of terms) {
        newTerms.push(i.split(" "));
      }

      for (let i of privacies) {
        const tempPerivacies = i.split(" ");
        let term = 0;

        newTerms.forEach((i) => {
          if (i[0] === tempPerivacies[1]) term = parseInt(i[1], 10);
        });

        const calcDate = new Date(tempPerivacies[0]).getMonth() + 1 + term;

        if (calcDate > 12) {
          // console.log(calcDate);
        } else {
        }
      }
    };

    // compression(word);
    // keyPad([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");
    infomation(
      "2022.05.19",
      ["A 6", "B 12", "C 3"],
      ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
    );
  }, []);
  return <></>;
};

export default Test_3;

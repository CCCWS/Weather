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
      const newTerms = [];
      const answer = [];

      for (let i of terms) {
        newTerms.push(i.split(" "));
      }

      for (let i in privacies) {
        const tempPerivacies = privacies[i].split(" ");
        let term = 0;

        newTerms.forEach((i) => {
          if (i[0] === tempPerivacies[1]) term = parseInt(i[1], 10);
        });

        const calcMonth = new Date(tempPerivacies[0]).getMonth() + 1 + term;

        let date = new Date(tempPerivacies[0]);
        let year = date.getFullYear();
        let month: any = calcMonth;
        let day: any = date.getDate();

        if (calcMonth > 12) {
          if (month % 12 === 0) {
            year += Math.floor(month / 12) - 1;
            month = 12;
          } else {
            year += Math.floor(month / 12);
            month = month % 12;
          }
        }

        if (month < 10) {
          month = String(month).padStart(2, "0");
        }

        if (day < 10) {
          day = String(day).padStart(2, "0");
        }

        if (
          today > `${year}.${month}.${day}` ||
          today === `${year}.${month}.${day}`
        ) {
          answer.push(parseInt(i, 10) + 1);
        }
        console.log(`${today} / ${year}.${month}.${day}`);
      }
      console.log(answer);
      return answer;
    };

    // compression(word);
    // keyPad([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");
    infomation("2009.12.31", ["A 13"], ["2008.11.03 A"]);
  }, []);
  return <></>;
};

export default Test_3;

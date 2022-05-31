import {ReviewsType} from "../types/globalTypes";

export function getAverage(key: keyof ReviewsType, reviews: ReviewsType[]){

  const average = reviews.reduce((total, next) => {
    if (typeof next[key] === 'number'){
      const num = next[key] as Number;
      return total + Number(num)
    }
    return total
  }, 0)  / reviews.length;

  return Math.round(average);
}
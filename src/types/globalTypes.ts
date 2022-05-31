
export interface AirlineItemType{
  code: string;
  logo: string;
  name: string;
}


export interface AirlineDataType {
  code: string;
  name: string;
  logo: string;
  customerServiceEmail: string;
  customerServicePhone: string;
  customerServiceWebsite: string;
  reviews: ReviewsType[]
}

export interface ReviewsType {
  customerName: string;
  review: string;
  overallScore: number;
  scheduleAccuracy: number;
  foodQuality: number;
  legRoom: number;
  cleanliness: number;
  staff: number;
  wouldRecommend: number;
}
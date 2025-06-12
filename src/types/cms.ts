import type { CommonType } from "./common";

export type homeBannerType = {
  id: number;
  title: string;
  sub_title: string;
  button_link: string;
  button_text: string;
  background_image: string;
  icon: string;
  total_collection: string;
};

export type aboutUsType = {
  title: string;
  description: string;
};

export type PartnerType = {
  id: number;
  name: string;
  logo: string;
};

export type HomeBannerResponse = CommonType<homeBannerType>;
export type AboutUsResponse = CommonType<aboutUsType>;
export type PartnerResponse = CommonType<PartnerType[]>;

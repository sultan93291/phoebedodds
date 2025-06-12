import type { CommonType } from "./common";

export type SocialType = {
  id: number;
  social_media: string;
  profile_link: string;
};

export type SocialTypeResponse = CommonType<SocialType[]>;

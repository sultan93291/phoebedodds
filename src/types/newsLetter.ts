import type { CommonType } from "./common";

export type NewsLetterSubscribeType = {
  id: number;
  email: string;
};

export type NewsLetterSubscribeResponse = CommonType<NewsLetterSubscribeType>;

export type NewsLetterUnubscribeResponse = CommonType<[]>;

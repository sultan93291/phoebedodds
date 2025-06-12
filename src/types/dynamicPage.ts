import type { CommonType } from "./common";

export type DynamicAllPageType = {
  id: number;
  page_title: string;
  page_slug: string;
  page_subtitle: string;
  page_content: string;
};

export type DynamicAllPageResponse = CommonType<DynamicAllPageType[]>;

export type DynamicSinglePageResponse = CommonType<DynamicAllPageType>;

import type { CommonType } from "./common";

export type SiteSettingType = {
  id: number;
  email: string;
  copyright_text: string;
  logo: string | null;
  favicon: string | null;
  phone: string;
  business_hours: string;
};

export type SiteSettingResponse = CommonType<SiteSettingType>;

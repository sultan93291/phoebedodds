import type { CommonType } from "./common";

// category type
export type SubCategoryType = {
  id: number;
  parent_id: number;
  name: string;
  slug: string;
  image: string | null;
};

export type MainCategoryType = {
  id: number;
  name: string;
  categories: SubCategoryType[];
};

// filter product via categories
export type FilteredProductType = {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  price: string;
  category: string;
  brand: string;
  url: string;
};

// filter product

export type FilterParams = {
  main_category_id?: number;
  category_id?: number;
  max_price?: number;
  min_price?: number;
  sort?: "price_high_to_low" | "price_low_to_high";
};

export type ProductType = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: string;
  category: string;
  brand: string;
  url: string;
};

export type PaginationLink = {
  url: string | null;
  label: string;
  active: boolean;
};

export type ProductsData = {
  current_page: number;
  data?: ProductType[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
  status: string;
};

export type ProductCount = {
  total_products: number;
  products: ProductsData;
  length: number;
};

export type MainCategoryResponse = CommonType<MainCategoryType[]>;
export type FilteredProductViaCategoryResponse = CommonType<
  FilteredProductType[]
>;
export type FilteredProductsResponse = CommonType<ProductCount>;

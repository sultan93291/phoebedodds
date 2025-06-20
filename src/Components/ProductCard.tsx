import type { ProductType } from "@/types/productCategories";

type ProductCardProps = {
  product: ProductType;
  index: number;
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  function getUrlUpToCom(url: string) {
    const index = url.indexOf(".com");

    if (index === -1) return null;
    return url.slice(0, index + 4);
  }
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col w-full border border-gray-300 p-2 rounded-md"
      key={product.id}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="w-full h-[300px] rounded overflow-hidden">
        <img
          src={product?.image}
          className="w-full h-full object-cover "
          alt={product.title}
        />
      </div>

      <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between pt-6 pb-2 items-center">
        <h3 className="font-inter text-[24px] max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap font-medium text-[#000]">
          {product?.title}
        </h3>
        <h4 className="font-inter xl:text-[26px] text-[20px] font-medium text-[#000]">
          ${product.price}
        </h4>
      </div>

      <p className="font-inter text-[12px] md:text-[14px] w-full text-[#0E55B2] underline cursor-pointer">
        {getUrlUpToCom(product.url)}
      </p>
    </a>
  );
};

export default ProductCard;

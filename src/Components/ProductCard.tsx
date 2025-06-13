import type { ProductType } from "@/types/productCategories";

type ProductCardProps = {
  product: ProductType;
  index: number;
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      key={product.id}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <img
        src={product.image}
        className="w-full h-auto rounded"
        alt={product.title}
      />

      <div className="flex justify-between pt-6 pb-2 items-center">
        <h3 className="font-inter text-[24px] max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap font-medium text-[#000]">
          {product.title}
        </h3>
        <h4 className="font-inter xl:text-[32px] text-[25px] font-medium text-[#000]">
          ${product.price}
        </h4>
      </div>

      <p className="font-inter text-[14px] text-[#0E55B2] underline cursor-pointer">
        {product.url}
      </p>
    </a>
  );
};

export default ProductCard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Shared/Container";
import CustomSelect from "../Reusable/CustomSelect";
import type { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { mainCategoriesFetching } from "@/features/categories/mainCategoriesSlice";

const SelectionArea = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { items, status } = useSelector(
    (state: RootState) => state.allCategories
  );

  useEffect(() => {
    dispatch(mainCategoriesFetching());
  }, [dispatch]);

  // Track selected main category and subcategory
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [subcategoryId, setSubcategoryId] = useState<number | null>(null);

  const handleChange = (index: number, value: number) => {
    setSelectedIndex(index);
    setSelectedValue(value);

    const section = items?.data?.[index];
    if (!section) return;

    const subcategory = section.categories?.find(
      (item: any) => item.id === value
    );

    if (section.id && subcategory?.id) {
      setCategoryId(section.id);
      setSubcategoryId(subcategory.id);
    }
  };

  const handleApply = () => {
    if (categoryId && subcategoryId) {
      navigate(`/product?category=${categoryId}&subcategory=${subcategoryId}`);
    }

    setSelectedIndex(null);
    setSelectedValue(null);
    setCategoryId(null);
    setSubcategoryId(null);
  };

  const handleClear = () => {
    setSelectedIndex(null);
    setSelectedValue(null);
    setCategoryId(null);
    setSubcategoryId(null);
  };

  if (status === "loading") {
    return (
      <Container>
        <SelectionSkeleton />
      </Container>
    );
  }

  return (
    <section className="xl:mb-8 2xl:px-0 px-5">
      <Container>
        <div
          className="flex flex-wrap gap-4 xl:justify-between justify-center items-center"
          data-aos="fade-up"
        >
          {items?.data?.map((label, index) => (
            <div key={index} className="flex-grow min-w-[200px]">
              <CustomSelect
                key={
                  selectedIndex === index
                    ? selectedValue ?? "none"
                    : `select-${index}`
                }
                options={label?.categories}
                placeholder={label.name}
                onChange={(value) => handleChange(index, value)}
                value={
                  selectedIndex === index
                    ? selectedValue ?? undefined
                    : undefined
                }
                disabled={selectedIndex !== null && selectedIndex !== index}
              />
            </div>
          ))}

          <button
            onClick={handleApply}
            disabled={!categoryId || !subcategoryId}
            className={`rounded-[24px] text-white outline-0 text-[16px] font-inter  py-[16px] md:py-[25px] px-10 flex-grow min-w-[200px]
              ${
                !categoryId || !subcategoryId
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#000] hover:bg-[#1a1a1a] cursor-pointer"
              } transition-all duration-300`}
          >
            Apply
          </button>

          {selectedValue !== null && selectedValue !== undefined && (
            <button
              onClick={handleClear}
              className="text-sm text-gray-600 underline hover:text-red-600 transition cursor-pointer"
            >
              Clear Filter
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

const SelectionSkeleton = () => {
  return (
    <section className="xl:mb-8 2xl:px-0 px-5">
      <div className="flex flex-wrap gap-4 xl:justify-between justify-center items-center">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="flex-grow min-w-[200px] h-[56px] bg-gray-200 animate-pulse rounded-[12px]"
          ></div>
        ))}
        <div className="flex-grow min-w-[200px] h-[56px] bg-gray-300 animate-pulse rounded-[24px]"></div>
      </div>
    </section>
  );
};

export default SelectionArea;

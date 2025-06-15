import type { SubCategoryType } from "@/types/productCategories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Components/ui/select";

interface CustomSelectProps {
  options: SubCategoryType[];
  placeholder?: string;
  onChange?: (value: number) => void;
  value?: number;
  className?: string;
  disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = "Select",
  onChange,
  value,
  className = "w-full py-[26px] md:py-[36px] flex justify-center cursor-pointer",
  disabled = false,
}) => {
  return (
    <Select
      onValueChange={(val) => onChange?.(Number(val))}
      value={value?.toString()}
      disabled={disabled}
    >
      <SelectTrigger
        className={`border border-[#828282] rounded-[24px] xl:text-[20px] text-[18px] font-inter !text-black !opacity-100 font-medium ${className} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option) => (
          <SelectItem
            key={option.id}
            value={option.id.toString()}
            className="text-[20px] font-inter !text-black font-medium cursor-pointer"
          >
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default CustomSelect;

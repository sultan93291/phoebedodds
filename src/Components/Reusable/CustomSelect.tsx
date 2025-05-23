import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Components/ui/select";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = "Select",
  onChange,
  value,
  className = "xl:w-[200px] w-[150px]",
}) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger
        className={`border border-[#828282] rounded-[24px] p-6 xl:text-[20px] text-[18px] font-inter text-black font-medium ${className}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(option => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-[20px] font-inter text-black font-medium cursor-pointer"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;

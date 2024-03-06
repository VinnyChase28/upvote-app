import { ArrowUpNarrowWide } from "lucide-react";

interface ArrowUpProps {
  isSelected: boolean;
  toggleSelected: () => void;
}

const ArrowUp = ({ isSelected, toggleSelected }: ArrowUpProps) => {
  const style = {
    background: isSelected ? "#E5E8FD" : "#F4F6F8",
    color: isSelected ? "#253CF2" : "#343A40",
  };

  return (
    <div style={style} onClick={toggleSelected}>
      <ArrowUpNarrowWide />
    </div>
  );
};

export default ArrowUp;
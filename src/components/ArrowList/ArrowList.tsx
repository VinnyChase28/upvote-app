import React from "react";
import ArrowUp from "../ArrowUp/ArrowUp";
import { useArrowUpStore } from "../../store/store";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Button } from "../ui/button";

// Would normally fetch this from an API
const arrowListIds = ["list1", "list2", "list3"];

interface ArrowProps {
  isSelected: boolean;
  toggleSelected: () => void;
}

export const ArrowDisplay: React.FC<ArrowProps> = ({
  isSelected,
  toggleSelected,
}) => (
  <div data-testid="arrow-up">
    <ArrowUp isSelected={isSelected} toggleSelected={toggleSelected} />
  </div>
);

interface ArrowControlsProps {
  listId: string;
}

const ArrowControls: React.FC<ArrowControlsProps> = ({ listId }) => {
  const { addArrow, removeArrow } = useArrowUpStore();
  return (
    <div className="p-2 flex justify-end space-x-2">
      <Button onClick={() => removeArrow(listId)}>-</Button>
      <Button onClick={() => addArrow(listId)}>+</Button>
    </div>
  );
};

interface ArrowListContainerProps {
  listId: string;
  role: string;
}

const ArrowListContainer: React.FC<ArrowListContainerProps> = ({
  listId,
  role,
}) => {
  const { lists, toggleArrow } = useArrowUpStore();
  const arrows = lists[listId] || [];
  return (
    <div
      key={listId}
      role={role}
      className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <ScrollArea className="flex items-center space-x-2 overflow-x-auto h-[5rem]">
        <div className="flex w-max space-x-2 p-2">
          {arrows.map((isSelected, index) => (
            <ArrowDisplay
              key={index}
              isSelected={isSelected}
              toggleSelected={() => toggleArrow(listId)}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ArrowControls listId={listId} />
    </div>
  );
};

const ArrowList: React.FC = () => (
  <>
    {arrowListIds.map((listId) => (
      <ArrowListContainer role="article" key={listId} listId={listId} />
    ))}
  </>
);

export default ArrowList;

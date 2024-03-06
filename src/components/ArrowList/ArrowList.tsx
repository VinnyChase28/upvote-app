import ArrowUp from "../ArrowUp/ArrowUp";
import { useArrowUpStore } from "../../store/store";
import { ScrollArea, ScrollBar } from "../ui/scroll-area"; // Make sure the path is correct

const arrowListIds = ["list1", "list2", "list3", "list4"];

const ArrowList = () => {
  const { lists, toggleArrow, addArrow, removeArrow } = useArrowUpStore(); // Assuming removeArrow is implemented

  return (
    <>
      {arrowListIds.map((listId) => {
        const arrows = lists[listId] || [];
        return (
          <div
            key={listId}
            className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <p className="text-lg font-semibold mb-4">Arrow List: {listId}</p>
            <ScrollArea className="flex items-center space-x-2 overflow-x-auto">
              <div className="flex w-max space-x-2 p-2">
                {arrows.map((isSelected, index) => (
                  <ArrowUp
                    key={index}
                    isSelected={isSelected}
                    toggleSelected={() => toggleArrow(listId)}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            {/* Button container fixed to the bottom right */}
            <div className="absolute bottom-2 right-2 flex space-x-2">
              <button
                onClick={() => addArrow(listId)}
                className="p-2 bg-blue-500 text-white rounded shadow"
              >
                +
              </button>
              <button
                onClick={() => removeArrow(listId)} // Implement the removeArrow function similarly to addArrow
                className="p-2 bg-red-500 text-white rounded shadow"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArrowList;

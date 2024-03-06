import ArrowUp from "../ArrowUp/ArrowUp";
import { useArrowUpStore } from "../../store/store";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

//would normally fetch this from an api
const arrowListIds = ["list1", "list2", "list3", "list4"];

const ArrowList = () => {
  const { lists, toggleArrow, addArrow, removeArrow } = useArrowUpStore();
  return (
    <>
      {arrowListIds.map((listId) => {
        const arrows = lists[listId] || [];
        return (
          <div
            key={listId}
            className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <ScrollArea className="flex items-center space-x-2 overflow-x-auto h-[5rem]">
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
            <div className="p-2 flex justify-end space-x-2">
              <button
                onClick={() => removeArrow(listId)}
                className="p-2 bg-red-500 text-white rounded shadow"
              >
                -
              </button>
              <button
                onClick={() => addArrow(listId)}
                className="p-2 bg-blue-500 text-white rounded shadow"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArrowList;

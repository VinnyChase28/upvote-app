import ArrowUp from "../ArrowUp/ArrowUp";
import { useArrowUpStore } from "../../store/store";

const arrowListIds = ["list1", "list2", "list3", "list4"];

const ArrowList = () => {
  const { lists, toggleArrow, addArrow } = useArrowUpStore();

  return (
    <>
      {arrowListIds.map((listId) => {
        const arrows = lists[listId] || [];
        return (
          <div
            key={listId}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <p className="text-lg font-semibold mb-4">Arrow List: {listId}</p>
            <div className="flex items-center space-x-2">
              {arrows.map((isSelected, index) => (
                <ArrowUp
                  key={index}
                  isSelected={isSelected}
                  toggleSelected={() => toggleArrow(listId)}
                />
              ))}
              <div className="flex-grow"></div>
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

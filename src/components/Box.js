import "../App.css";
import Draggable from "./Draggable";

const Box = ({ hasItem, onSelect }) => {
  const dragEnterOrOver = (e) => {
    if (hasItem) {
      return;
    }
    e.preventDefault();
  };
  return (
    <div
      onDrop={onSelect}
      onDragEnter={dragEnterOrOver}
      onDragOver={dragEnterOrOver}
      className="box"
    >
      {hasItem && <Draggable />}
    </div>
  );
};

export default Box;

import InputText from "./inputext";
import Button from "./button";
const List = (props) => {
  const listMaxIndex = props.todolist.length - 1;
  const listItems = props.todolist.map((listItem, index) => (
    <div
      className="input-group container mt-1 mb-2 todo_item "
      style={{ width: "70rem" }}
    >
      <button type="button" className="btn btn-dark mr-1">
        <span className="badge badge-light" style={{ width: "2rem" }}>
          {index + 1}
        </span>
        <span className="sr-only"></span>
      </button>
      {listItem.isEdit && (
        <>
          <InputText
            type="text"
            value={listItem.itemEditText}
            className="todo_item"
            placeholder="Recipient's username"
            aria-label="Recipient's username with two button addons"
            onInputTextChange={(event) => {
              const editValue = event.target.value;
              props.onChangeEdit(index, editValue);
            }}
          ></InputText>
          <Button
            onButtonClick={() => {
              props.onEditSubmitClick(index);
            }}
            className="btn btn-outline-dark"
            buttonText="Submit"
            type="button"
          >
            SUBMIT
          </Button>
          <Button
            onButtonClick={() => {
              props.onEditCancel(index);
            }}
            className="btn btn-outline-dark"
            buttonText="CANCEL"
            type="button"
          >
            CANCEL
          </Button>
        </>
      )}

      {!listItem.isEdit && (
        <>
          <InputText
            color={listItem.isDone ? "palegreen" : ""}
            value={listItem.item}
          ></InputText>
          {/* Conditional rendering - Do not show Edit Btn for Done Element */}
          {!listItem.isDone && (
            <button
              onClick={() => {
                props.onEditClick(index);
              }}
              style={{ width: "5rem" }}
              className="btn text-white bg-dark btn-outline-white"
              type="button"
            >
              EDIT
            </button>
          )}

          {/* Conditional rendering - Do not show Up Btn at first element */}
          {index !== 0 && (
            <button
              onClick={() => {
                props.swapListItem(index, index - 1);
              }}
              style={{ width: "5rem" }}
              className="btn btn-outline-dark"
              type="button"
            >
              UP
            </button>
          )}

          {/* Conditional rendering - Do not show Down btn at last element */}
          {index !== listMaxIndex && (
            <button
              onClick={() => {
                props.swapListItem(index, index + 1);
              }}
              style={{ width: "5rem" }}
              className="btn btn-outline-dark"
              type="button"
            >
              DOWN
            </button>
          )}

          {/* Conditional rendering - To show Done Btn*/}
          {!listItem.isDone && (
            <button
              onClick={() => {
                props.onClickDone(index);
              }}
              style={{ width: "5rem" }}
              className="btn text-white bg-dark btn-outline-white"
              type="button"
            >
              DONE
            </button>
          )}

          {/* Conditional rendering  - To Show Delete Btn */}
          {listItem.isDone && (
            <button
              onClick={() => {
                props.onClickDelete(index);
              }}
              className="btn btn-outline-dark"
              style={{ width: "5rem" }}
              type="button"
            >
              DELETE
            </button>
          )}
        </>
      )}
    </div>
  ));

  return <div className="pb-5 mb-4">{listItems} </div>;
};

export default List;

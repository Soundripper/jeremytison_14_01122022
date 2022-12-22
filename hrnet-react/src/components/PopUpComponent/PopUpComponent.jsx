import "./PopUpComponent.css";
export const PopUpComponent = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <h2>{text}</h2>
      <button onClick={closePopup}>X</button>
     </div>
    </div>
  );
};
import "./PopUpComponent.css";
import useEscape from "./useEscape";
import styled, { keyframes } from 'styled-components'

const fadeAnim = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

const Component = styled.div`
  animation-name: ${fadeAnim};
  animation-duration: ${props => props.fadeanimduration};
`

const PopUpModalComponent = ({ text, openModal, closePopup, myPopupBodyStyle, myPopupContainerStyle, myPopupCloseButtonStyle, fadeanimduration}) => {
  useEscape(closePopup);

  if (!openModal) {
    return null;
  }
  
  return (
    <Component fadeanimduration={fadeanimduration} className={"popup-container"} style={myPopupContainerStyle}>
      <div className="popup-body" style={myPopupBodyStyle}>
      <h2>{text}</h2>
      <button onClick={closePopup} className="popClosebutton" style={myPopupCloseButtonStyle}>XX</button>
      </div>
    </Component>
  );
};

export default PopUpModalComponent
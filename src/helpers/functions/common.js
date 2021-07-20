import styled, { keyframes } from "styled-components";

// ===========================================
export const getCoordinateElement = (e) => {
  const coordinates = e.target.getBoundingClientRect();
  const top = coordinates.top + window.pageYOffset;
  const left = coordinates.left + window.pageXOffset;
  return { top, left };
};

// Animation of adding a product to the cart
export const setCoordinatesKeyframes = (top, left) => {
  const animationAddingItemCart = keyframes`
  60% { 
    opacity: 1;
  };  
  100% { 
    opacity: 0;
    top: ${top}px;
    left: ${left}px;
  }`;
  return animationAddingItemCart;
};

export const createAnimationElement = (top, left, animName) => {
  const EffectAddingItemCart = styled.span`
    position: absolute;
    top: ${top - 25}px;
    left: ${left + 15}px;
    width: 25px;
    height: 25px;
    background: #cc4a16;
    border-radius: 50%;
    animation: ${animName} 0.8s forwards;
  `;
  return EffectAddingItemCart;
};

// ===========================================
// Set localstorage data
export const setLocalStorageData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

// ===========================================
// Text
export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.substring(1);
};

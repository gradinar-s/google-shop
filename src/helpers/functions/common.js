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
// Cookie settings
export const createCookie = (key, value, days = 365) => {
  let date = new Date();

  // Get unix milliseconds at current time plus number of days
  date.setTime(+date + days * 86400000); // 24 * 60 * 60 * 1000

  window.document.cookie = `${key}=${value}; expires=${date.toGMTString()}; path=/`;

  return value;
};

export const readCookie = (cookieName) => {
  let pairKeyValue = {};

  document.cookie.split("; ").forEach((cookie) => {
    let result = cookie.split("=");
    pairKeyValue[result[0]] = result[1];
  });

  return pairKeyValue[cookieName];
};

// ===========================================

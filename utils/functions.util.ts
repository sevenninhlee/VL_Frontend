// import { ACTIVE_SERVER } from "@/constants/auth.constant";
import { toNumber } from "lodash";

export const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const formatPrice = (price: string) => {
  const number = toNumber(price)
    .toFixed(2)
    .toString()
    .match(/^-?\d+(?:\.\d{0,2})?/);
  if (number?.length) return number[0];
  return null;
};

export const copyToClipBoard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (error) {
      console.error(error);
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

// export const saveActiveServer = (serverId: string) => {
//   return localStorage.setItem(`${ACTIVE_SERVER}`, serverId);
// };


// src/utils/function.js
export const getImageURL = image => { 
    return new URL(`../assets/images/${image}`, import.meta.url).href;
}

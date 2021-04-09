const COUNT = '[COUNT]';

export const INCREMENT_COUNT = `${COUNT} Increment`;
export const DECREMENT_COUNT = `${COUNT} Decrement`;

export const incrementCount = () => ({
  type:INCREMENT_COUNT
})
export const decrementCount = () => ({
  type:DECREMENT_COUNT
})


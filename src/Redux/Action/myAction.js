export const increment = (count) => {
    return {
        type: "Increment", 
        payload: count
    };
};

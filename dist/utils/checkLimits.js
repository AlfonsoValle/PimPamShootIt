export const checkLimits = (position) => {
    if (position.x < 1024 &&
        position.x > 0 &&
        position.y > 0 &&
        position.y < 1024) {
        return true;
    }
    return false;
};

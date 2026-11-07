var dominantIndex = function(nums) {
    let x = [...nums].sort((a, b) => b - a);

    let y = x[0];

    if (y >= x[1] * 2) {
        return nums.indexOf(y);
    } else {
        return -1;
    }
};
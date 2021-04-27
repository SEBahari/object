//---------------------------------------------------------------- Create Array ---------
let array = [];
for (let i = 0; i < 10_000; i++) array.push(i);

//---------------------------------------------------------------- Call Function --------
console.log(bin_search(array, 2));

//---------------------------------------------------------------- Function -------------
function bin_search(array, value, start = 0, end) {
    if (end == null) end = array.length - 1;
    let mid = Math.floor((start + end) / 2);

    console.log(['start', array[start], 'mid', array[mid], 'end', array[end]]);

    if (start > end) return (-1);

    if (value === array[mid]) return (mid);

    else if (value > array[mid]) return bin_search(array, value, mid + 1, end);
    else if (value < array[mid]) return bin_search(array, value, start, mid - 1);
}
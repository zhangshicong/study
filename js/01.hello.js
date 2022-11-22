function _indexof(array, value) {
    // 补全代码

    array.forEach((ele, index) => {
        if (ele === value) {
            console.log(index);
        }
    })
    console.log('-1');

}
_indexof([1, 2, 3], 3);
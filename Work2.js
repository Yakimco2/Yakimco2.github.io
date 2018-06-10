var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {
    return array.sort(function (left, right) {
        var leftType = stringNull(left);
        var rightType = stringNull(right);
        var index;
        var equal = function () {
            if( left > right){
                index = 1;
            }
            else{
                index = -1;
            }
            return index;
        }

        if(dataPriority.indexOf(leftType) > dataPriority.indexOf(rightType)){
            index = 1;
        }
        else if(dataPriority.indexOf(leftType) < dataPriority.indexOf(rightType)){
            index = -1;
        }
        else {
            equal()
        }
        return index;

    });
}

function stringNull(value) {
    var typeIndex = typeof value;


    if(typeof value === null) {
        typeIndex = 'null'
    }

    return typeIndex;
}
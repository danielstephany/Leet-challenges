var combine = function(n, k) {
    const getCombo = (start, n, k) => {
        const res = []
        let combos;
        let combo;

        for(let firstIndex = start; firstIndex <= n; firstIndex++){
            if(n === k){
                if(!res[0]) res.push([])
                res[0].push(firstIndex)
            } else if(k === 1){
                res.push([firstIndex])
            } else if(k === 2) {
                for(let secondIndex = start; secondIndex <= n; secondIndex++){
                    if(firstIndex === 1 || firstIndex < n ){
                        if(firstIndex < secondIndex && k <= 2){
                            res.push([firstIndex, secondIndex])
                        }                            
                    }
                }
            } else if(k > 2){
                combos = getCombo(start + 1, n, k - 1)
                for(let comboI = 0; comboI < combos.length; comboI++){
                    combo = combos[comboI]                       
                    if(combo[0] > firstIndex){                            
                        combo.unshift(firstIndex)
                        if( combo && combo.length === k){
                            res.push(combo)
                        }
                    }
                }
            }
        }
        return res;
    }
    return getCombo(1, n, k)
};


// console.log(combine(4, 2))
// console.log([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]])

// console.log(combine(1, 1))
console.log(combine(5, 3))
// console.log(combine(9, 9))

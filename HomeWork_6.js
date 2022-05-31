//1. Get array of node ids from tree (keys).

let tree = {
    0: {
        1:{
            3:{
            },
4:{
6:{
}
}
},
        2:{
5:{
        }
        }
}
}
function arrayOfNodes(obj, result = []) {
  
        for (var key in obj) {
                result.push(key)
                arrayOfNodes(obj[key], result);
                
            }
           
        return result 
          
      }
      arrayOfNodes(tree)

 //2. Get array of nodes from tree.
 
 let tree = {
        0: {
            1:{
                3:{
                },
    4:{
    6:{
    }
    }
    },
            2:{
    5:{
            }
            }
    }
    }

 function arrayOfNodes(obj, result=[]) {
  
        for (var key in obj) {
                result.push({id:key, children:[obj[key]]})
                arrayOfNodes(obj[key], result);
                
            }
           
        return result 
          
      }
      arrayOfNodes(tree)

 // 3. Implement binary search. 
 
 function binarySearch(sortedArray, num){
        let start = 0;
        let end = sortedArray.length - 1;
      
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
      
            if (sortedArray[mid] === num) {
               
                return mid;
            } else if (sortedArray[mid] < num) {
                
                start = mid + 1;
            } else {
                
                end = mid - 1;
            }
        }
    
        return -1;
      }
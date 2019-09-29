module.exports = function check(str, bracketsConfig) {
    let br = bracketsConfig;
    let br_len = bracketsConfig.length;
    let check = [];
    let str_arr;
    let status = true;
    let br_op = [];
    let br_cl = [];
  
    for (let i = 0; i < br_len; i++) { // разбиваем на открывающие и закрывающие по массивам
        br_op.push(br[i][0]);
        br_cl.push(br[i][1]);
      }
  
       str_arr = str.split(''); // если кол-во нечётное, то задание не выполниться
       if (str_arr.length % 2) {
           status = false;
           return status;
       }
  
      for (let i = 0; i < str_arr.length; i++) {
          if ( br_op.indexOf(str_arr[i]) == br_cl.indexOf(str_arr[i]) && check[check.length-1] == str_arr[i]) {
              check.pop();
          } else if (br_op.indexOf(str_arr[i]) > -1) {
              check.push(str_arr[i]);
          } else {
              let x = br_op.indexOf(check[check.length-1]);
              if (x == br_cl.indexOf(str_arr[i])) {
                  check.pop();
              } else {
                  status = false;
                  break;
              }
              
          }
      }
      if (check.length > 0) {
          status = false;
      }
  
  
  
    return status;
    //console.log(status);
  }
    
  //check('8888877878887777777888888887777777887887788788887887777777788888888887788888', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]);
  
  
// }

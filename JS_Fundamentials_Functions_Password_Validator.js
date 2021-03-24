//OK 52/100
function passwordValidator (param){
        let pasLength = param.length;
        let total = 0;
        let flag = true;
        let regex = /(^[A-Za-z0-9]+$)/
        let match = regex.exec(param)
      
            if (pasLength<6 || pasLength>=10){
                console.log("Password must be between 6 and 10 characters")
                flag=false;
            } 
            
            let arr = param.split("").map(Number)
                for (const iterator of arr) {
                    if(!isNaN(iterator)){
                        total++
                        //console.log("sfsd")
                    }
                 }
                 if (!match){
                    console.log("Password must consist only of letters and digits")
                    flag=false;
                } 
                 if (total<2){
                    console.log(`Password must have at least 2 digits`)
                    flag=false;
                 }
                 
           
            if(flag==true) {

                console.log('Password is valid')
            }
          
}
passwordValidator ('aaa1aa')
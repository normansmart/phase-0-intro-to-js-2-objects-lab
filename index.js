// Write your solution in this file!
const employee = {

    name: "James",

    streetAddress: "42 Broadway",



};



function updateEmployeeWithKeyAndValue(employee, key, value){


    const newObj = { ...employee };

    newObj[key] = value;
  
    return newObj;

 

}



function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){


    obj[key] = value; 

    return obj;

 

}


function deleteFromEmployeeByKey(obj, key, value){


    return {
        ...obj,
        [key]: value,
      };
 

}



function destructivelyDeleteFromEmployeeByKey(obj, key, value){


   delete employee.name;

   return employee;
 

}
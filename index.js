// Write your solution in this file!
const employee = {name:"izzy",streetAddress:'wynnedale'}
/*function updateEmployeeWithKeyAndValue(employee, key, value){
let newobj = {...employee}
return newobj.name = 'sam'
}*/
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let employer = {...employee}
    employer[key] = value
    return employer
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value
  return employee
}
function deleteFromEmployeeByKey(employee, key){
    let newObj = {...employee}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]
   return employee
}
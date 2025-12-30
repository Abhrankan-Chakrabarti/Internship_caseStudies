// Challenge 7: Using enums and interfaces to model staff data
// 1. Define an enum for staff roles
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
// 3. Create an array of staff members using the interface and enum
var staffMembers = [
    { id: 1, name: "Alice", role: Role.Doctor },
    { id: 2, name: "Bob", role: Role.Nurse },
    { id: 3, name: "Carol", role: Role.Admin }
];
// 4. Write a function to print a summary of all staff
function printStaffSummary(staffList) {
    for (var _i = 0, staffList_1 = staffList; _i < staffList_1.length; _i++) {
        var staff = staffList_1[_i];
        console.log("".concat(staff.name, " is a ").concat(Role[staff.role]));
    }
}
// Call the function
printStaffSummary(staffMembers);

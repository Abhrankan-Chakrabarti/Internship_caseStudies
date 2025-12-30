// Challenge 7: Using enums and interfaces to model staff data

// 1. Define an enum for staff roles
enum Role {
  Doctor,
  Nurse,
  Admin
}

// 2. Create an interface for staff members
interface Staff {
  id: number;
  name: string;
  role: Role;
}

// 3. Create an array of staff members using the interface and enum
let staffMembers: Staff[] = [
  { id: 1, name: "Alice", role: Role.Doctor },
  { id: 2, name: "Bob", role: Role.Nurse },
  { id: 3, name: "Carol", role: Role.Admin }
];

// 4. Write a function to print a summary of all staff
function printStaffSummary(staffList: Staff[]): void {
  for (let staff of staffList) {
    console.log(`${staff.name} is a ${Role[staff.role]}`);
  }
}

// Call the function
printStaffSummary(staffMembers);


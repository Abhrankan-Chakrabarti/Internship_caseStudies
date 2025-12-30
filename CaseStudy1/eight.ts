// Challenge 8: Modeling profiles with null and undefined

// 1. Define a type Profile
type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string; // optional → may be undefined
};

// 2. Create two profiles
let profile1: Profile = {
  username: "john_doe",
  bio: null
  // avatarUrl is missing → undefined
};

let profile2: Profile = {
  username: "jane_doe",
  bio: "Loves TypeScript!",
  avatarUrl: "https://example.com/avatar.jpg"
};

// 3. Write a function to show profile details
function showProfile(profile: Profile): void {
  let bioMessage = profile.bio === null 
    ? "No bio available" 
    : profile.bio;

  let avatarMessage = profile.avatarUrl === undefined 
    ? "Default avatar used" 
    : profile.avatarUrl;

  console.log(`User: ${profile.username}`);
  console.log(`Bio: ${bioMessage}`);
  console.log(`Avatar: ${avatarMessage}`);
  console.log("-------------------------");
}

// 4. Call the function with both profiles
showProfile(profile1);
showProfile(profile2);


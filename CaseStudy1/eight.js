// Challenge 8: Modeling profiles with null and undefined
// 2. Create two profiles
var profile1 = {
    username: "john_doe",
    bio: null
    // avatarUrl is missing → undefined
};
var profile2 = {
    username: "jane_doe",
    bio: "Loves TypeScript!",
    avatarUrl: "https://example.com/avatar.jpg"
};
// 3. Write a function to show profile details
function showProfile(profile) {
    var bioMessage = profile.bio === null
        ? "No bio available"
        : profile.bio;
    var avatarMessage = profile.avatarUrl === undefined
        ? "Default avatar used"
        : profile.avatarUrl;
    console.log("User: ".concat(profile.username));
    console.log("Bio: ".concat(bioMessage));
    console.log("Avatar: ".concat(avatarMessage));
    console.log("-------------------------");
}
// 4. Call the function with both profiles
showProfile(profile1);
showProfile(profile2);

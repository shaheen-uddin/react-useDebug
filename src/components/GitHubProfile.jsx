import useGithub from "../hooks/useGithub";

export default function GitHubProfile() {
  const { user, loading, error } = useGithub("shaheen-uddin");
  console.log(user);
  return (
    <div className="max-w-6xl mx-auto py-4">
      {user ? (
        <div className="flex flex-col justify-center items-center p-4">
          <img
            src={user["avatar_url"]}
            alt="photo"
            className="border rounded-full w-32 h-32"
          />
          <p className="text-3xl my-3">
            {user.name} has <strong>{user["public_repos"]}</strong> public
            repositories that gained <strong>{user.followers}</strong>{" "}
            followers.
          </p>
          <h2 className="text-xl">More About the contributors: </h2>
          <p className="my-2 text-md bg-gray-300 border p-2 rounded-md font-semibold font-mono">
            {user?.bio}
          </p>
        </div>
      ) : (
        <p>No user Found.</p>
      )}
    </div>
  );
}

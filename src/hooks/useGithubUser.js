import { useState, useEffect } from "react";

function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    if (!username) return; // Ensure we don't fetch data when username is empty or null

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const headers = { Authorization: `token ${token}` };

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
        if (!userResponse.ok) throw new Error('User not found');
        const userData = await userResponse.json();

        // Fetch user repositories
        const reposResponse = await fetch(userData.repos_url);
        if (!reposResponse.ok) throw new Error('Error fetching repositories');
        const reposData = await reposResponse.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, token]);

  return { user, repos, loading, error };
}

export default useGithubUser;

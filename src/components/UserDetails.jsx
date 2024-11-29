import React, { useRef } from 'react';
import '../App.css';
import useGithubUser from '../hooks/useGithubUser';
import { ThreeDots } from 'react-loader-spinner';

function UserDetails({ username }) {
  const { user, repos, loading, error } = useGithubUser(username);

  if (loading) {
    return (
      <div className="center-container">
        <ThreeDots color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  if (error) {
    return <p className="center-container">Error: {error}</p>;
  }

  if (!user) {
    return <p className="center-container">Type a username to fetch GitHub profile details.</p>;
  }


  return (
    <>
      <div className="main-section">
        <div className="left">
          <a
            onClick={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="avatar_url" src={user.avatar_url} alt="User Avatar" />
          </a>
        </div>
        <div className="right">
          <a
            className="name_url_link"
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="name">{user.name || user.login}</h1>
          </a>
          <p className="bio">{user.bio || 'No bio available'}</p>
          <div className="deepdetails">
            <div className="location">
              <img
                className="h-5"
                src="https://www.iconpacks.net/icons/2/free-location-icon-2952-thumb.png"
                alt="Location Icon"
              />
              <p>{user.location || 'Location not available'}</p>
            </div>
            <div className="website">
              <img
                className="h-5"
                src="https://www.svgrepo.com/show/438949/web-round.svg"
                alt="Website Icon"
              />
              <p>
                <a
                  href={"https://" + user.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.blog || user.email || 'No website'}
                </a>
              </p>
            </div>
          </div>
          <div className="followers">
            <p>
              <b>Followers</b>: {user.followers}
            </p>
            <p>
              <b>Following</b>: {user.following}
            </p>
          </div>
        </div>
      </div>

      <div className="repos">
        {repos?.length > 0 ? (
          repos.map((repo) => (
            <div className="repo1" key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h3>{repo.name}</h3>
              </a>
            </div>
          ))
        ) : (
          <p>No repositories available.</p>
        )}
      </div>
    </>
  );
}

export default UserDetails;

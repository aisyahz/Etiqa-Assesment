import React from 'react';
import './RepoItem.css';

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-card">
     <img
  src={repo.owner.avatar_url}
  alt={repo.owner.login}
  className="avatar"
  title={`Owner: ${repo.owner.login}`}
/>

      <div className="repo-details">
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <p>⭐ Stars: {repo.stargazers_count}</p>
        <p>👤 Owner: {repo.owner.login}</p>
      </div>
    </div>
  );
};

export default RepoItem;

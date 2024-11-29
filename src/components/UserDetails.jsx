import React from 'react'
import '../App.css'
import useGithubUser from '../hooks/useGithubUser'



function UserDetails({ username }) {

    const { user, repos, loading, error } = useGithubUser(username)



    if (loading) return <p className='center-container'>Loading...</p>
    if (error) return <p className='center-container'>Error : {error}</p>
    if (!user) return <p className='center-container'>Type a username to fetch GitHub profile details.</p>
    return (

        <>
        <div className="main-section">
            <div className="left">

                <a  href={user.html_url} target='_blank'><img className='avatar_url' src={user.avatar_url} alt="" /></a>
            </div>

            <div className="right">
                <a className='name_url_link' href={user.html_url} target='_blank'><h1 className='name'>{user.name || user.login}</h1></a>
                <p className='bio'>{user.bio}</p>
                <div className="deepdetails">
                    <div className="location">
                        <img className='h-5' src="https://www.iconpacks.net/icons/2/free-location-icon-2952-thumb.png" alt="" />
                        <p>{user.location || 'Location ):'}</p>
                    </div>
                    <div className="website">
                        <img className='h-5' src="https://www.svgrepo.com/show/438949/web-round.svg" alt="" />
                        <p><a href={"https://" + user.blog} target='_blank'>{user.blog || user.email || 'blank'}</a></p>
                    </div>



                </div>
                <div className="followers">
                    <p><b>Followers</b> : {user.followers}</p>
                    <p><b>Following</b> : {user.following}</p>
                </div>
            </div>







        </div>


        <div className="repos">
             
                {repos && repos.map((repo,index) => (
                    <div className="repo1" key={repo.id || index}>
                       <a href={repo.html_url} target='_blank'> <h3>{repo.name}</h3></a>

                    </div>

                ))}
            
        </div>

        </>
        


    )
}

export default UserDetails
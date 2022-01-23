import '@/SCSS/index.scss';
import Header from "@/components/Header";
import Searchbar, { search } from "@/components/Searchbar";
import createState from "@/TS/createState";
import { useRecoilState, useRecoilValue } from "recoil";
import IconLocation from '@/assets/icon-location.svg';
import IconWebsite from '@/assets/icon-website.svg';
import IconTwitter from '@/assets/icon-twitter.svg';
import IconCompany from '@/assets/icon-company.svg';
import formatDate from '@/TS/formatDate';

export const themeAtom = createState({
    key: 'theme',
    default: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light'
});

const example = {
  "login": "octocat",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "twitter_username": "monatheoctocat",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}


export const userAtom = createState({
  key: 'user-data',
  default: example
})





export function App() {
    const theme = useRecoilValue(themeAtom);
    document.body.className = theme;

    const user = useRecoilValue(userAtom);

  return (
    <div id="container">
      <Header />
       <Searchbar />
      <div id="info">
        <div id="top">
          <img src={user.avatar_url} alt="" id="image"/>
          <div id="top-text">
            <h1 id="name">{user.login}</h1>
            <h4 id="username">{user.twitter_username ? <a href={`https://twitter.com/${user.twitter_username}`} target="_blank">@{user.twitter_username}</a> : user.login}</h4>
            <h4 id="date-joined">Joined {formatDate(user.created_at)}</h4>
          </div>
        </div>

        <div id="bottom">
          <p className={`body${user.bio ? '' : ' unavailable'}`} id="description">
            {user.bio ? user.bio : 'This profile has no bio'}
          </p>

          <div id="stats">
            <div id="repos" className="stat">
              <h4>Repos</h4>
              <span>{user.public_repos}</span>
            </div>
            <div id="followers" className="stat">
              <h4>Followers</h4>
              <span>{user.followers}</span>
            </div>
            <div id="following" className="stat">
              <h4>Following</h4>
              <span>{user.following}</span>
            </div>
          </div>

          <div id="links">
            <div className={`link${user.location ? '' : ' unavailable'}`}>
              <IconLocation />
              <span>{user.location ? user.location : 'Not Available'}</span>
            </div>
            <div className={`link${user.blog ? '' : ' unavailable'}`}>
              <IconWebsite />
              <a href={`//${user.blog.replace(/^https?\:\/\//i, "")}`} target="_blank">{user.blog ? user.blog : 'Not Available'}</a>
            </div>
            <div className={`link${user.twitter_username ? '' : ' unavailable'}`}>
              <IconTwitter />
              {user.twitter_username ? <a href={`https://twitter.com/${user.twitter_username}`} target="_blank">@{user.twitter_username}</a>: <span>Not Available</span>}
            </div>
            <div className={`link${user.company ? '' : ' unavailable'}`}>
              <IconCompany />
              <span>{user.company ? user.company : 'Not Available'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const express = require('express')
const app = express()
const port = 5000

const githubData = {
    "login": "alokkumarjha",
    "id": 32379914,
    "node_id": "MDQ6VXNlcjMyMzc5OTE0",
    "avatar_url": "https://avatars.githubusercontent.com/u/32379914?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/alokkumarjha",
    "html_url": "https://github.com/alokkumarjha",
    "followers_url": "https://api.github.com/users/alokkumarjha/followers",
    "following_url": "https://api.github.com/users/alokkumarjha/following{/other_user}",
    "gists_url": "https://api.github.com/users/alokkumarjha/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/alokkumarjha/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/alokkumarjha/subscriptions",
    "organizations_url": "https://api.github.com/users/alokkumarjha/orgs",
    "repos_url": "https://api.github.com/users/alokkumarjha/repos",
    "events_url": "https://api.github.com/users/alokkumarjha/events{/privacy}",
    "received_events_url": "https://api.github.com/users/alokkumarjha/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2017-09-29T03:06:07Z",
    "updated_at": "2022-11-16T10:31:37Z"
}



app.get('/',(req , res) => {
    res.send('Welcome To Server Alok !')
})

app.get('/login',(req , res) => {
    res.send('<h1>User AUthentication</h1>')
})

app.get('/mygithub',(req,res) => {
    res.json(githubData)
})

app.listen(port,() => {
    console.log(`Server is Listening on port ${port}`)
})
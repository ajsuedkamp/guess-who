const express = require('express');
const app = express();
const port = process.env.PORT || 5002;
app.use(express.static('server/public'));

var people = [
    {
      name: 'Latisha',
      githubUsername: 'lcopeland001',
      // profilePic: '<img src="https://avatars.githubusercontent.com/u/104704657?v=4?size=250" alt="profile image of Latisha"'
    },
    {
      name: 'Oscar',
      githubUsername: 'oscar-oscar',
      // profilePic: '<img src="https://avatars.githubusercontent.com/u/99150237?v=4?size=250" alt="profile image of Latisha"'
    },
    {
      name: 'Jon',
      githubUsername: 'Jbaxend1',
      // profilePic: '<img src="https://avatars.githubusercontent.com/u/99089013?v=4?size=250" alt="Profile image of Jonathan"'
    },
    {
      name: 'Alex',
      githubUsername: 'ajsuedkamp',
      // profilePic: '<img src="https://avatars.githubusercontent.com/u/99096711?v=4?size=250" alt="Profile image of Alex">'
    },
    {
      name: 'Kyle',
      githubUsername: 'Octicon',
      // profilePic: '<img src="https://avatars.githubusercontent.com/u/99093821?v=4?size=250" alt="Profile image of Kyle"></img>'
    },
  ]


app.get('/people', (req, res) => {
    console.log(req);
    res.send(people);
});


app.listen(port, () => {
    console.log('Listening on ', port);
});
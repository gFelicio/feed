const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const posts = [];
const pageSize = 5;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    let currentPage = 1;
    const totalPosts = posts.length;
    const pageCount = Math.ceil(totalPosts / pageSize);

    if(req.query.page){
        currentPage = parseInt(req.query.page, 10);
    }

    const start = (currentPage - 1) * pageSize;
    const end = currentPage * pageSize;

    res.render('index',
        {
            posts: posts.slice(start,end),
            pageSize: pageSize,
            pageCount: pageCount,
            currentPage: currentPage,
        }
    );
});

app.post('/new', (req, res) => {
    const post = {
        id: posts.length + 1,
        videoID: req.body.videoID,
        timestamp: moment().format(),
        timestampStr: moment().fformat,
    };

    posts.unshift(post);

    res.status(200).json(post);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

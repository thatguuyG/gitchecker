import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());


app.get('/api/repos/:name', async (req, res) => {
    try {
        const repoName = req.params.name;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('gitchecker');
    
        const repoInfo = await db.collection('repos').findOne({ name: repoName })
        res.status(200).json(repoInfo);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
    
});

app.post('/api/repos/:name/bookmark', async (req, res) => {
    try {
        const repoName = req.params.name;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db('gitchecker');
    
        const repoInfo = await db.collection('repos').findOne({ name: repoName });
        await db.collection('repos').updateOne({ name: repoName }, {
            '$set': {
                bookmarks: repoInfo.bookmarks + 1,
            },
        });
        const updatedRepoInfo = await db.collection('repos').findOne({ name: repoName });
    
        res.status(200).json(updatedRepoInfo);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
});

app.post('/api/repos/:name/bookmark', (req, res) => {
    const repoName = req.params.name;

    repoInfo[repoName].bookmarks += 1;
    res.status(200).send(`${repoName} now has ${repoInfo[repoName].bookmarks} bookmarks`);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8000, () => console.log('Listening on port 8000'));
# gitchecker

Project to check for the most Popular Git repos

Project requisites
1. Node installed
2. MongoDB installed


Instalation instructions
1. Download project folder and run npm install on your terminal
2. Start mongo using the keyword 'mongo' on your terminal.
3. Copy paste the data from data.json.
4. Run the following commands while in the MongoShell
    -- use gitchecker
    -- db.repos.insert([
    {
    name: 'freeCodeCamp',
    bookmarks: 0
}, {
    name: '996.ICU',
    bookmarks: 0,
}, {
    name: 'vue',
    bookmarks: 0,
}, {
    name: 'free-programming-books',
    bookmarks: 0,
}, {
    name: 'react',
    bookmarks: 0,
}, {
    name: 'coding-interview-university',
    bookmarks: 0,
}, {
    name: 'tensorflow',
    bookmarks: 0,
}, {
    name: 'awesome',
    bookmarks: 0,
}, {
    name: 'bootstrap',
    bookmarks: 0,
}, {
    name: 'developer-roadmap',
    bookmarks: 0,
},
])


5. Now your database is all setup.
6. Now run npm start. Happy coding!

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');
const trip = require('./routes/api/trip');
const stop = require('./routes/api/stop');
const day = require('./routes/api/day');
const event = require('./routes/api/event');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //to access req.body

// DB Config
const db = require('./config/keys').mongoURI;

console.log(db)

// Connect to mongoDB
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Passport Config

// Use routes
// app.use('/api/users', users);
// app.use('/api/trip', trip);
// app.use('/api/stop', stop);
// app.use('/api/event', event);
// app.use('/api/day', day);
app.use('/api/adminUser', adminUser);
app.use('/api/company', company);
app.use('/api/department', department);
app.use('/api/onboardChecklist', onboardChecklist);
app.use('/api/position', position);
app.use('/api/positionHiringBoard', positionHiringBoard);
app.use('/api/positionHiringPlan', positionHiringPlan);
app.use('/api/team', team);
app.use('/api/terminateChecklist', terminateChecklist);
app.use('/api/user', user);

app.use('/api/onboard-checklist/onboardTask', onboardTask);
app.use('/api/position-hiring-board/lead', lead);
app.use('/api/position-hiring-board/stage', stage);
app.use('/api/terminate-checklist/terminateTask', terminateTask);
app.use('/api/user/oneToOne', oneToOne);

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

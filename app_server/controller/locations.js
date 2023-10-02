/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with WiFi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starbucks',
            address: 'Besides Iron Hill gym, Sainikpuri.',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Hi-speed WIFI'],
            distance: '2500m'
        }, {
            name: 'OYOLA',
            address: 'Kamala Nagar, Behind Asian Radhika Multiplex, ECIL.',
            rating: 4,
            facilities: ['Food', 'Spa', 'Hot drinks', 'Hi-speed WIFI'],
            distance: '2000m'
        }, {
            name: "McDonalds'",
            address: 'Besides HP petrol pump, Opposite to Central Biryani Pointe, NNRG crossroads, Ghatkesar',
            rating: 4,
            facilities: ['Food', 'Soft drinks', 'Ice Creams', 'Hi-speed WIFI'],
            distance: '1000m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Starbucks',
        pageHeader: {
            title: 'Starbucks'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space tosit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t -please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starbucks',
            address: 'Besides Iron Hill gym, Sainikpuri.',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Hi-speed WIFI'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

// Locationinfo2 
module.exports.locationInfo2 = function(req, res) {
    res.render('location-info', {
        title: 'OYOLA',
        pageHeader: {
            title: 'OYOLA'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space tosit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t -please leave a review to help other people just like you.'
        },
        location: {
            name: 'OYOLA',
            address: 'Kamala Nagar, Behind Asian Radhika Multiplex, ECIL.',
            rating: 3,
            facilities: ['Food', 'Spa', 'Hot drinks', 'Hi-speed WIFI'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Nick Jonas',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Karthik Aryan',
                rating: 3,
                timestamp: '16 June 2023',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

// Locationinfo3 page
module.exports.locationInfo3 = function(req, res) {
    res.render('location-info', {
        title: "McDonalds'",
        pageHeader: {
            title: "McDonalds'"
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space tosit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t -please leave a review to help other people just like you.'
        },
        location: {
            name: "McDonalds'",
            address: 'Besides HP petrol pump, Opposite to Central Biryani Pointe, NNRG crossroads, Ghatkesar',
            rating: 3,
            facilities: ['Food', 'Soft drinks', 'Ice Creams', 'Hi-speed WIFI'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Aman Reddy',
                rating: 5,
                timestamp: '24 June 2022',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'P. S Abhishek',
                rating: 3,
                timestamp: '06 August 2023',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};


/* GET 'ADD review' page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {
        title: 'Review Starbucks on Loc8r',
        pageHeader:{
            title: 'Review Starbucks'
        }
    });
};

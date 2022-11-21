import episodeCode from "./episodeCode";

test("function takes in an object and returns a string containing season and episode number < 10", () => {
    expect(episodeCode({
        "id": 4952,
        "url": "https://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
        "name": "Winter is Coming",
        "season": 1,
        "number": 1,
        "type": "regular",
        "airdate": "2011-04-17",
        "airtime": "21:00",
        "airstamp": "2011-04-18T01:00:00+00:00",
        "runtime": 60,
        "rating": {
        "average": 8.4
        },
        "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg"
        },
        "summary": "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>",
        "_links": {
        "self": {
        "href": "https://api.tvmaze.com/episodes/4952"
        },
        "show": {
        "href": "https://api.tvmaze.com/shows/82"
        }
        }
        })).toEqual("S01E01")
});

test("function takes in an object and returns a string containing season and episode number great than 10", () => {
    expect(episodeCode({
        "id": 4981,
        "url": "https://www.tvmaze.com/episodes/4981/game-of-thrones-3x10-mhysa",
        "name": "Mhysa",
        "season": 3,
        "number": 10,
        "type": "regular",
        "airdate": "2013-06-09",
        "airtime": "21:00",
        "airstamp": "2013-06-10T01:00:00+00:00",
        "runtime": 60,
        "rating": {
        "average": 8.3
        },
        "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/1/2597.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/2597.jpg"
        },
        "summary": "<p>Joffrey challenges Tywin. Bran tells a ghost story. In Dragonstone, mercy comes from strange quarters. Daenerys waits to see if she is a conqueror or a liberator.</p>",
        "_links": {
        "self": {
        "href": "https://api.tvmaze.com/episodes/4981"
        },
        "show": {
        "href": "https://api.tvmaze.com/shows/82"
        }
        }
        })).toEqual("S03E10")
    
})
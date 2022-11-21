import searchFilter from "./searchFilter";

test("Passing the Valar argument prints the episode", () => {
  expect(
    searchFilter(
      [
        {
          id: 4971,
          url: "https://www.tvmaze.com/episodes/4971/game-of-thrones-2x10-valar-morghulis",
          name: "Valar Morghulis",
          season: 2,
          number: 10,
          type: "regular",
          airdate: "2012-06-03",
          airtime: "21:00",
          airstamp: "2012-06-04T01:00:00+00:00",
          runtime: 60,
          rating: {
            average: 9.3,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/1/3197.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/1/3197.jpg",
          },
          summary:
            "<p>Tyrion awakens to a changed situation. King Joffrey doles out rewards to his subjects. As Theon stirs his men to action, Luwin offers some final advice. Brienne silences Jaime; Arya receives a gift from Jaqen; Dany goes to a strange place; Jon proves himself to Qhorin.</p>",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/4971",
            },
            show: {
              href: "https://api.tvmaze.com/shows/82",
            },
          },
        },
        {
          id: 4972,
          url: "https://www.tvmaze.com/episodes/4972/game-of-thrones-3x01-valar-dohaeris",
          name: "Valar Dohaeris",
          season: 3,
          number: 1,
          type: "regular",
          airdate: "2013-03-31",
          airtime: "21:00",
          airstamp: "2013-04-01T01:00:00+00:00",
          runtime: 60,
          rating: {
            average: 7.9,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/1/2628.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/1/2628.jpg",
          },
          summary:
            "<p></p><p>Jon is brought before Mance Rayder, the King Beyond the Wall, while the Night's Watch survivors retreat south. In King's Landing, Tyrion asks for his reward. Littlefinger offers Sansa a way out. Cersei hosts a dinner for the royal family. Daenerys sails into Slaver's Bay.</p>",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/4972",
            },
            show: {
              href: "https://api.tvmaze.com/shows/82",
            },
          },
        },
      ],
      "Valar"
    )
  ).toEqual([
    {
      id: 4971,
      url: "https://www.tvmaze.com/episodes/4971/game-of-thrones-2x10-valar-morghulis",
      name: "Valar Morghulis",
      season: 2,
      number: 10,
      type: "regular",
      airdate: "2012-06-03",
      airtime: "21:00",
      airstamp: "2012-06-04T01:00:00+00:00",
      runtime: 60,
      rating: {
        average: 9.3,
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/1/3197.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/3197.jpg",
      },
      summary:
        "<p>Tyrion awakens to a changed situation. King Joffrey doles out rewards to his subjects. As Theon stirs his men to action, Luwin offers some final advice. Brienne silences Jaime; Arya receives a gift from Jaqen; Dany goes to a strange place; Jon proves himself to Qhorin.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/4971",
        },
        show: {
          href: "https://api.tvmaze.com/shows/82",
        },
      },
    },
    {
      id: 4972,
      url: "https://www.tvmaze.com/episodes/4972/game-of-thrones-3x01-valar-dohaeris",
      name: "Valar Dohaeris",
      season: 3,
      number: 1,
      type: "regular",
      airdate: "2013-03-31",
      airtime: "21:00",
      airstamp: "2013-04-01T01:00:00+00:00",
      runtime: 60,
      rating: {
        average: 7.9,
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/1/2628.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/2628.jpg",
      },
      summary:
        "<p></p><p>Jon is brought before Mance Rayder, the King Beyond the Wall, while the Night's Watch survivors retreat south. In King's Landing, Tyrion asks for his reward. Littlefinger offers Sansa a way out. Cersei hosts a dinner for the royal family. Daenerys sails into Slaver's Bay.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/4972",
        },
        show: {
          href: "https://api.tvmaze.com/shows/82",
        },
      },
    },
  ]);
});

test("Passing the Valar argument prints the episode", () => {
  expect(
    searchFilter(
      [
        {
          id: 4971,
          url: "https://www.tvmaze.com/episodes/4971/game-of-thrones-2x10-valar-morghulis",
          name: "Valar Morghulis",
          season: 2,
          number: 10,
          type: "regular",
          airdate: "2012-06-03",
          airtime: "21:00",
          airstamp: "2012-06-04T01:00:00+00:00",
          runtime: 60,
          rating: {
            average: 9.3,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/1/3197.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/1/3197.jpg",
          },
          summary:
            "<p>Tyrion awakens to a changed situation. King Joffrey doles out rewards to his subjects. As Theon stirs his men to action, Luwin offers some final advice. Brienne silences Jaime; Arya receives a gift from Jaqen; Dany goes to a strange place; Jon proves himself to Qhorin.</p>",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/4971",
            },
            show: {
              href: "https://api.tvmaze.com/shows/82",
            },
          },
        },
        {
          id: 4972,
          url: "https://www.tvmaze.com/episodes/4972/game-of-thrones-3x01-valar-dohaeris",
          name: "Valar Dohaeris",
          season: 3,
          number: 1,
          type: "regular",
          airdate: "2013-03-31",
          airtime: "21:00",
          airstamp: "2013-04-01T01:00:00+00:00",
          runtime: 60,
          rating: {
            average: 7.9,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/1/2628.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/1/2628.jpg",
          },
          summary:
            "<p></p><p>Jon is brought before Mance Rayder, the King Beyond the Wall, while the Night's Watch survivors retreat south. In King's Landing, Tyrion asks for his reward. Littlefinger offers Sansa a way out. Cersei hosts a dinner for the royal family. Daenerys sails into Slaver's Bay.</p>",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/4972",
            },
            show: {
              href: "https://api.tvmaze.com/shows/82",
            },
          },
        },
      ],
      "Hellfire"
    )
  ).toEqual([]);
});

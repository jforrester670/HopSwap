DROP DATABASE IF EXISTS hopswap;

CREATE DATABASE hopswap;

\c hopswap;

CREATE TABLE users (
  id SERIAL,
  user_name varchar(15) NOT NULL PRIMARY KEY
);

CREATE TABLE beerlist (
  id SERIAL PRIMARY KEY,
  user_name varchar(15) REFERENCES users(user_name),
  name varchar(50),
  description varchar(500),
  image_url varchar(500),
  abv NUMERIC(3,1),
  ibu NUMERIC(3,1)
);

INSERT INTO users (user_name) VALUES('smokey');

INSERT INTO beerlist (user_name, name, description, image_url, abv, ibu) VALUES ('smokey', 'Trashy Blonde', 'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.', 'https://images.punkapi.com/v2/2.png', 4.1, 41.5);

INSERT INTO beerlist (user_name, name, description, image_url, abv, ibu) VALUES ('smokey', 'Pilsen Lager', 'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.', 'https://images.punkapi.com/v2/4.png', 6.3, 55);

INSERT INTO beerlist (user_name, name, description, image_url, abv, ibu) VALUES ('smokey', 'Avery Brown Dredge', 'An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.', 'https://images.punkapi.com/v2/5.png', 7.2, 59);

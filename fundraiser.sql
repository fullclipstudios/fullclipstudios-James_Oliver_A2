use crowdfunding_db;

CREATE TABLE FUNDRAISER (
FUNDRAISER_ID int (5),
ORGANIZER varchar (50),
CAPTION varchar (50),
TARGET_FUNDING int (10),
CURRENT_FUNDING int (10),
CITY varchar (50),
`ACTIVE` BOOLEAN,
CATEGORY_ID int (5),

PRIMARY KEY (FUNDRAISER_ID),
FOREIGN KEY (CATEGORY_ID)REFERENCES CATEGORY (CATEGORY_ID)
);

CREATE TABLE CATEGORY (
CATEGORY_ID int (5) auto_increment,
NAME varchar (50),
PRIMARY KEY (CATEGORY_ID)
);

INSERT INTO FUNDRAISER (FUNDRAISER_ID, ORGANIZER, CAPTION, TARGET_FUNDING, CURRENT_FUNDING, CITY, ACTIVE, CATEGORY_ID) VALUES
(11033, "Community Talent Show", "Showcase the Talent", 1000, 0, "Sydney", FALSE, 1 ),
(26280, "Fun Run", "Run for a cause", 10000, 2000, "Melbourne", TRUE, 1 ),
(78336, "Gaming tournament", "Have fun, win big", 1500, 500, "Cloncurry", TRUE, 1 ),
(34272, "Community plant reserve", "Help us grow", 15000, 0, "Perth", FALSE, 3 ),
(99869, "Local Wildlife sanctuary", "Take Action to help animals", 10000, 6000, "Brisbane", TRUE, 5 );

INSERT INTO CATEGORY (NAME) VALUES
("Community"),
("Arts"),
("Environment"),
("Health"),
("Animal welfare");

use crowdfunding_db;
SELECT * FROM fundraiser;
truncate category;

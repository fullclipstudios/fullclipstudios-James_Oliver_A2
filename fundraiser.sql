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
CATEGORY_ID int (5),
NAME varchar (50),
PRIMARY KEY (CATEGORY_ID)
);

INSERT INTO FUNDRAISER (FUNDRAISER_ID, ORGANIZER, CAPTION, TARGET_FUNDING, CURRENT_FUNDING, CITY, ACTIVE, CATEGORY_ID) VALUES
(11033, "Beyond Blue", "Crisis HotLine", 5000, 500, "Sydney", FALSE, 4 ),
(26280, "WWF", "Aussie Wilflide Donation", 10000, 2000, "Melbourne", TRUE, 5 ),
(78336, "RFDS", "Air Ambulance", 20000, 5000, "Cloncurry", TRUE, 4 ),
(34272, "World Vision", "End Poverty", 15000, 1000, "Perth", FALSE, 1 ),
(99869, "RSPCA", "Take Action to help animals", 10000, 6000, "Brisbane", TRUE, 5 );

INSERT INTO CATEGORY (NAME) VALUES
("Community"),
("Arts"),
("Environment"),
("Health"),
("Animal welfare");

use crowdfunding_db;
SELECT * FROM fundraiser;
truncate fundraiser;

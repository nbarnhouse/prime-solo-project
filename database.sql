--Database is called prime_app

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (50) NOT NULL,
    "last_name" VARCHAR (50) NOT NULL,
    "email" VARCHAR (50) UNIQUE NOT NULL,
    "pass_hash" VARCHAR (1000) NOT NULL, 
    "type" VARCHAR (20), 
    "phone" VARCHAR (10)
);


INSERT INTO "user" ("first_name", "last_name", "email", "pass_hash")
VALUES ('Nicole', 'Barnhouse', 'nicolebarnhouse@gmail.com', '$2b$10$uxPm0qeJAz70oqhEg8dX6uXlYc2PWUtPuZhTa65OiDv2LCHA41OLq', 
'Tracy', 'Tyson', 'ttyson@tca.org', '$2b$10$uxPm0qeJAz70oqhEg8dX6uXlYc2PWUtPuZhTa65OiDv2LCHA41OLq');


CREATE TABLE "teacher" (
    "id" SERIAL PRIMARY KEY,
    "grade" INT NOT NULL, 
    "room_number" INT NOT NULL,
    "extension" INT NOT NULL,
    "user_id" INT REFERENCES "user"
);

INSERT INTO "teacher" ("grade", "room_number", "extension", "user_id")
VALUES ('5', '206', '101', '2');

CREATE TABLE "substitute_availability" (
    "id" SERIAL PRIMARY KEY,
    "date" Date NOT NULL, 
    "day" VARCHAR (20) NOT NULL,
    "user_id" INT REFERENCES "user"
);

INSERT INTO "substitute_availability" ("date", "day", "user_id")
VALUES ('2024-03-26', 'Tuesday', '1');

CREATE TABLE "requests" (
    "id" SERIAL PRIMARY KEY,
    "request_start_date" DATE NOT NULL, 
    "status" VARCHAR (20), 
    "teacher_id" INT REFERENCES "teacher", 
    "submit_date" DATE NOT NULL,
    "request_end_date" DATE NOT NULL,
    "reason" VARCHAR (255),
    "admin_notes" VARCHAR (255),
    "sub_notes" VARCHAR (255),
    "attachment_url" VARCHAR (255)
);

INSERT INTO "requests" ("submit_date", "request_start_date", "request_end_date", "teacher_id")
VALUES ('2024-03-26', '2024-03-27', '2024-03-27', '2');

--Database is called prime_app

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (50) NOT NULL,
    "last_name" VARCHAR (50) NOT NULL,
    "email" VARCHAR (50) UNIQUE NOT NULL,
    "pass_hash" VARCHAR (50) NOT NULL, 
    "type" VARCHAR (20) NOT NULL, 
    "phone" VARCHAR (10) NOT NULL
);

CREATE TABLE "teachers" (
    "id" SERIAL PRIMARY KEY,
    "grade" INT NOT NULL, 
    "room_number" INT NOT NULL,
    "extension" INT NOT NULL,
    "user_id" INT REFERENCES "users"
);

CREATE TABLE "substitute_availability" (
    "id" SERIAL PRIMARY KEY,
    "date" Date NOT NULL, 
    "day" VARCHAR (20) NOT NULL,
    "user_id" INT REFERENCES "users"
);

CREATE TABLE "requests" (
    "id" SERIAL PRIMARY KEY,
    "request_start_date" Date NOT NULL, 
    "status" VARCHAR (20), 
    "teacher_id" INT REFERENCES "teachers", 
    "submit_date" DATE NOT NULL,
    "request_end_date" DATE NOT NULL,
    "reason" VARCHAR (255),
    "admin_notes" VARCHAR (255),
    "sub_notes" VARCHAR (255),
    "attachment_url" VARCHAR (255)
);

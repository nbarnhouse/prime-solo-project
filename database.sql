--Database is called prime_app

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL, 
    "first_name" VARCHAR (50),
    "last_name" VARCHAR (50),
    "type" VARCHAR (20), 
    "phone" VARCHAR (10)
);

CREATE TABLE "teacher" (
    "id" SERIAL PRIMARY KEY,
    "grade" INT NOT NULL, 
    "room_number" INT NOT NULL,
    "extension" INT NOT NULL,
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "substitute_availability" (
    "id" SERIAL PRIMARY KEY,
    "date" Date NOT NULL, 
    "type" VARCHAR (20) NOT NULL,
    "comments" VARCHAR (1000),
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "requests" (
    "id" SERIAL PRIMARY KEY,
    "request_start_date" Date, 
    "school" VARCHAR(50) DEFAULT 'Tulsa Classical Academy',
    "status" VARCHAR (20) DEFAULT 'Requested', 
    "teacher_id" INT REFERENCES "teacher", 
    "user_id" INT REFERENCES "user",
    "submit_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "reason" VARCHAR (255),
    "admin_notes" VARCHAR (255),
    "sub_notes" VARCHAR (255)
);
-- This SQL command inserts a new user into our Database, and then selects all the users. It is more common to
-- run the get_users sql command again like is shown in the delete endpoint on the front-end
insert into users (
    name
) values (
    $1
);

select * from users;
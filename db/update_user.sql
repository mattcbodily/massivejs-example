-- This updates the users name on the users table. Again, it is more common to hit the endpoint that uses the 
-- get_users sql command instead of throwing in a select * from users in this file. An example for that is how 
-- the delete endpoint is setup.
update users set name = ${name}
where user_id = ${id};

select * from users;
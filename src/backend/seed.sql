-- INSERT INTO users (username, hashed_password, email, first_name, last_name )
-- VALUES (
--     'test', null, 'monogator@gmail.com', 'Isaac', 'Summers'
-- );


INSERT INTO books (userId, title, author, description, genre, total_pages, pages_read)
VALUES 
    (12, 'The Fifth Season', 'N.K. Jemison', 'Broken Earth setting. World plagued by cataclysmic seasons. Protagonists with unique abilities. Quest to save civilization. Themes of oppression, survival, and the consequences of power. Engrossing narrative with intricate world-building.', 'Dark Fantasy', 512, 512),
    (12, 'Warbreaker', 'Brandon Sanderson', 'Royal princesses Vivenna and Siri caught in political intrigue, magic, and war. Gods, alliances, sacrifices, and extraordinary powers. Themes of identity and gods vs. mortals. Intriguing and captivating fantasy narrative.', 'Fantasy', 355, 355),
    (12, 'The Priory of the Orange Tree', 'Samantha Shannon', 'Dragons and a battle against an ancient threat, set in a richly crafted world of magic and politics.', 'Fantasy', 848, 0);




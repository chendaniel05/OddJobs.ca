USE jobs;

INSERT INTO Postings (title, description, employer, location, salary, availability, createdAt, updatedAt) 
VALUES 
('Dog Walker', 'Availiable to walk your dogs for 1 hour per day, anytime of the day! @4169587843', 'Self-employed (Jordan James)', 'Toronto, Ontario', "$15 per hour", "On-Call", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Household Keeper', 'Need help cleaning/organizing your home? give me a call @6475038543', 'self-employed (Christy Mohammed)', 'Hamilton, Ontario', "$70 per house", "On-Call", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Caregiver','Need a baby sitter? Need help taking care of an elder in your house? iCare is here for you!', 'iCare @9052312565', 'Vaughan, Ontario', "$85 per day", "On-Call", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Make-up Artist', 'Helping you look your best for your special occassion', '(self-employed (Megan)', 'Montreal, Quebec', "$150 per session", "On-Call", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Moving company', 'We am helping people move their furniture', 'Quick Move @ 4161230987', 'Toronto, Ontario', "$120 per house", "On-Call", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Tutoring', 'Our tutoring team will guarantee your children a "A+" at school', 'Tutor School', 'Toronto, Ontario', "$25 per hour", "On-Call", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)

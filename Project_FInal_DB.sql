CREATE DATABASE MyProjectDB;
--DROP DATABASE MyProjectDB;
use MyProjectDB
-- Users Table
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username VARCHAR(50) NOT NULL,
    UserPassword VARCHAR(255) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    PhoneNumber VARCHAR(15),
    DOB DATE NOT NULL,
    RegistrationDate DATE NOT NULL
);


Insert into Users
values
('Shoaib','12345','yuhugmaIL.COM','0321',GETDATE(),GETDATE());

Alter table Users
Add constraint Uniq_UserName Unique(Username);

Alter table Users
Add constraint Uniq_Password Unique(UserPassword);

select*from Users

-- Admin Table
CREATE TABLE Admin(
    AdminID INT PRIMARY KEY IDENTITY(1,1),
    AdminName VARCHAR(100) NOT NULL,
    AdminPassword VARCHAR(255) NOT NULL
);

-- Membership Types Table
CREATE TABLE MembershipTypes (
    MembershipTypeID INT PRIMARY KEY IDENTITY(1,1),
    TypeName VARCHAR(50) NOT NULL
);

-- Payment Status Table
CREATE TABLE PaymentStatuses (
    PaymentStatusID INT PRIMARY KEY IDENTITY(1,1),
    StatusName VARCHAR(50) NOT NULL
);

select * from Payments

-- Memberships Table
CREATE TABLE Memberships (
    MembershipID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    MembershipTypeID INT,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    PaymentStatusID INT,
    CONSTRAINT FK_Memberships_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FK_Memberships_Types FOREIGN KEY (MembershipTypeID) REFERENCES MembershipTypes(MembershipTypeID),
    CONSTRAINT FK_Memberships_PaymentStatus FOREIGN KEY (PaymentStatusID) REFERENCES PaymentStatuses(PaymentStatusID),
    CONSTRAINT UQ_User_Membership UNIQUE (UserID, MembershipTypeID, StartDate, EndDate)
);

-- Facilities Table
CREATE TABLE Facilities (
    FacilityID INT PRIMARY KEY IDENTITY(1,1),
    FacilityName VARCHAR(100) NOT NULL,
    FacilityType VARCHAR(50) NOT NULL,
    AvailabilityStatus BIT NOT NULL
);

-- Facility Time Table
CREATE TABLE FacilityTimes (
    TimeSlotID INT PRIMARY KEY IDENTITY(1,1),
    FacilityID INT,
    StartTime DATETIME NOT NULL,
    EndTime DATETIME NOT NULL,
    CONSTRAINT FK_FacilityTimes_Facilities FOREIGN KEY (FacilityID) REFERENCES Facilities(FacilityID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT UQ_FacilityTime UNIQUE (FacilityID, StartTime, EndTime)
);

-- Bookings Table (Facility Booking)
CREATE TABLE Bookings (
    BookingID INT PRIMARY KEY IDENTITY(1,1),
    FacilityID INT,
    UserID INT,
    TimeSlotID INT,
    BookingStatus VARCHAR(50) NOT NULL,
    CONSTRAINT FK_Bookings_Facilities FOREIGN KEY (FacilityID) REFERENCES Facilities(FacilityID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FK_Bookings_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FK_Bookings_Times FOREIGN KEY (TimeSlotID) REFERENCES FacilityTimes(TimeSlotID) ON DELETE NO ACTION ON UPDATE NO ACTION,
    -- Prevent a user from booking the same facility at the same time more than once
    CONSTRAINT UQ_UserFacilityTime UNIQUE (FacilityID, TimeSlotID)
);


-- Trainers Table
CREATE TABLE Trainers (
    TrainerID INT PRIMARY KEY IDENTITY(1,1),
    Name VARCHAR(100) NOT NULL,
    Specialization VARCHAR(100) NOT NULL,
    AvailabilityStatus BIT NOT NULL
);

-- Trainer Times Table
CREATE TABLE TrainerTimes (
    TimeSlotID INT PRIMARY KEY IDENTITY(1,1),
    TrainerID INT,
    StartTime DATETIME NOT NULL,
    EndTime DATETIME NOT NULL,
    CONSTRAINT FK_TrainerTimes_Trainers FOREIGN KEY (TrainerID) REFERENCES Trainers(TrainerID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT UQ_TrainerTime UNIQUE (TrainerID, StartTime, EndTime)
);

-- Trainer Bookings Table
CREATE TABLE TrainerBookings (
    BookingID INT PRIMARY KEY IDENTITY(1,1),
    TrainerID INT,
    UserID INT,
    TimeSlotID INT,
    BookingStatus VARCHAR(50) NOT NULL,
    CONSTRAINT FK_TrainerBookings_Trainers FOREIGN KEY (TrainerID) REFERENCES Trainers(TrainerID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FK_TrainerBookings_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FK_TrainerBookings_Times FOREIGN KEY (TimeSlotID) REFERENCES TrainerTimes(TimeSlotID) ON DELETE NO ACTION ON UPDATE NO ACTION,
    -- Prevent a user from booking the same trainer at the same time more than once
    CONSTRAINT UQ_UserTrainerTime UNIQUE (TrainerID, TimeSlotID)
);

-- Payments Table
CREATE TABLE Payments (
    PaymentID INT PRIMARY KEY IDENTITY(1,1),
    MembershipID INT,
    UserID INT,
    Amount INT NOT NULL,
    PaymentDate DATE NOT NULL,
    PaymentType VARCHAR(50) NOT NULL,
    PaymentStatusID INT,
    CONSTRAINT FK_Payments_Memberships FOREIGN KEY (MembershipID) REFERENCES Memberships(MembershipID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FK_Payments_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT FK_Payments_Status FOREIGN KEY (PaymentStatusID) REFERENCES PaymentStatuses(PaymentStatusID)
);

-- Feedback Table
CREATE TABLE Feedback (
    FeedbackID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    Content TEXT NOT NULL,
    Rating INT,
    FeedbackDate DATE NOT NULL,
    CONSTRAINT FK_Feedback_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE ON UPDATE CASCADE,
    -- Only one feedback per user per day
    CONSTRAINT UQ_Feedback_Per_Day UNIQUE (UserID, FeedbackDate)
);

--select * from Users
select*from MembershipTypes

CREATE VIEW trainers_of_users AS
SELECT 
    u.UserID,
    u.Username,
    t.TrainerID,
    t.Name,
    t.Specialization,
    ts.StartTime,
    ts.EndTime,
    tb.BookingStatus
FROM Users u
JOIN TrainerBookings tb ON u.UserID = tb.UserID
JOIN Trainers t ON t.TrainerID = tb.TrainerID
JOIN TimeSlots ts ON tb.TimeSlotID = ts.TimeSlotID;

CREATE VIEW facilities_of_users AS
SELECT 
    u.UserID,
    u.Username,
    f.FacilityID,
    f.FacilityName,
    ts.StartTime,
    ts.EndTime,
    b.BookingStatus
FROM Users u
JOIN Bookings b ON u.UserID = b.UserID
JOIN Facilities f ON b.FacilityID = f.FacilityID
JOIN TimeSlots ts ON b.TimeSlotID = ts.TimeSlotID;

Create View feedback_of_users AS
Select  u.UserID,u.Username,f.FeedbackID, f.Content,f.Rating,f.FeedbackDate
From Users u
Inner join Feedback f ON u.UserID = f.UserID;

Create View user_payments_view AS
Select  u.UserID,u.Username, p.PaymentID, p.Amount, p.PaymentDate, p.PaymentType, ps.StatusName AS PaymentStatus
FROM Users u
Inner join Payments p ON u.UserID = p.UserID
Inner join PaymentStatuses ps ON p.PaymentStatusID = ps.PaymentStatusID;

Create View user_membership_view AS
Select u.UserID,u.Username,m.MembershipID,mt.TypeName AS MembershipType,m.StartDate,m.EndDate
From Users u
Inner join Memberships m ON u.UserID = m.UserID
Inner join MembershipTypes mt ON m.MembershipTypeID = mt.MembershipTypeID;



-----updates

ALTER TABLE MembershipTypes
ADD Price INT;

ALTER TABLE Facilities
DROP COLUMN AvailabilityStatus;

-- Drop foreign key from TrainerBookings referencing TrainerTimes
ALTER TABLE TrainerBookings
DROP CONSTRAINT FK_TrainerBookings_Times;

-- Drop foreign key from Bookings referencing FacilityTimes
ALTER TABLE Bookings
DROP CONSTRAINT FK_Bookings_Times;

DROP TABLE IF EXISTS TrainerTimes;
DROP TABLE IF EXISTS FacilityTimes;

CREATE TABLE TimeSlots (
    TimeSlotID INT PRIMARY KEY IDENTITY(1,1),
    StartTime VARCHAR(20) NOT NULL,
    EndTime VARCHAR(20) NOT NULL,
    CONSTRAINT UQ_TimeSlot UNIQUE (StartTime, EndTime)
);

ALTER TABLE Bookings
ADD BookingDate DATE NOT NULL DEFAULT GETDATE(); 


ALTER TABLE Bookings DROP CONSTRAINT IF EXISTS FK_Bookings_Times;


ALTER TABLE Bookings
ADD CONSTRAINT FK_Bookings_Times FOREIGN KEY (TimeSlotID) REFERENCES TimeSlots(TimeSlotID);


ALTER TABLE Bookings
ADD CONSTRAINT UQ_Booking_UniqueSlotPerDay UNIQUE (FacilityID, TimeSlotID, BookingDate);


ALTER TABLE TrainerBookings
ADD BookingDate DATE NOT NULL DEFAULT GETDATE();

ALTER TABLE TrainerBookings DROP CONSTRAINT IF EXISTS FK_TrainerBookings_Times;


ALTER TABLE TrainerBookings
ADD CONSTRAINT FK_TrainerBookings_Times FOREIGN KEY (TimeSlotID) REFERENCES TimeSlots(TimeSlotID);

ALTER TABLE TrainerBookings
ADD CONSTRAINT UQ_TrainerBooking_UniqueSlotPerDay UNIQUE (TrainerID, TimeSlotID, BookingDate);

Alter table TrainerBookings
Drop constraint UQ_TrainerBooking_UniqueSlotPerDay

ALTER TABLE TrainerBookings
ADD CONSTRAINT UQ_TrainerSlot UNIQUE (TrainerID, TimeSlotID);

Select * from Users

INSERT INTO MembershipTypes (TypeName, Price)
VALUES 
('Silver', 5000),
('Gold', 10000);
select * from MembershipTypes

INSERT INTO PaymentStatuses (StatusName)
VALUES 
('Pending'),
('Successful');
select * from PaymentStatuses

select * from Memberships
select * from Payments



--Normalization changes:

---user normalization--
ALTER TABLE Users DROP CONSTRAINT Uniq_Password
ALTER TABLE Users ADD CONSTRAINT UQ_Users_Email UNIQUE (Email);

---MembershipTypes normalization
ALTER TABLE MembershipTypes ADD CONSTRAINT UQ_MembershipType_Name UNIQUE (TypeName);

---Payment Stuses normalization
ALTER TABLE PaymentStatuses ADD CONSTRAINT UQ_PaymentStatus_Name UNIQUE (StatusName);

---Facilties table normalization
ALTER TABLE Facilities ADD CONSTRAINT UQ_Facility_Name UNIQUE (FacilityName);

----Noramlization Trainer table
ALTER TABLE Trainers ADD CONSTRAINT UQ_Trainer_Name UNIQUE (Name);

---Feedback normalization
ALTER TABLE Feedback ADD CONSTRAINT CHK_ValidRating CHECK (Rating BETWEEN 1 AND 5);





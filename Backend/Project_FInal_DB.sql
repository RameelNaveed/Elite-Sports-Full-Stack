/*
Elite Sports Management System - Database Schema
Author: Rameel Naveed
Description: This script sets up the complete database structure for the Gym Management System,
             including tables, views, and initial seed data.
*/

-- 1. Setup Database
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'MyProjectDB')
BEGIN
    CREATE DATABASE MyProjectDB;
END
GO
USE MyProjectDB;
GO

-- 2. Core Tables
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username VARCHAR(50) NOT NULL CONSTRAINT UQ_UserName UNIQUE,
    UserPassword VARCHAR(255) NOT NULL,
    Email VARCHAR(100) NOT NULL CONSTRAINT UQ_Users_Email UNIQUE,
    PhoneNumber VARCHAR(15),
    DOB DATE NOT NULL,
    RegistrationDate DATE NOT NULL DEFAULT GETDATE()
);

CREATE TABLE MembershipTypes (
    MembershipTypeID INT PRIMARY KEY IDENTITY(1,1),
    TypeName VARCHAR(50) NOT NULL CONSTRAINT UQ_MembershipType_Name UNIQUE,
    Description TEXT,
    Price INT NOT NULL
);

CREATE TABLE Memberships (
    MembershipID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    MembershipTypeID INT,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    CONSTRAINT FK_Memberships_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    CONSTRAINT FK_Memberships_Types FOREIGN KEY (MembershipTypeID) REFERENCES MembershipTypes(MembershipTypeID),
    CONSTRAINT UQ_User_Membership UNIQUE (UserID, MembershipTypeID, StartDate, EndDate)
);

CREATE TABLE Facilities (
    FacilityID INT PRIMARY KEY IDENTITY(1,1),
    FacilityName VARCHAR(100) NOT NULL CONSTRAINT UQ_Facility_Name UNIQUE,
    FacilityType VARCHAR(50) NOT NULL
);

CREATE TABLE TimeSlots (
    TimeSlotID INT PRIMARY KEY IDENTITY(1,1),
    StartTime VARCHAR(20) NOT NULL,
    EndTime VARCHAR(20) NOT NULL,
    CONSTRAINT UQ_TimeSlot UNIQUE (StartTime, EndTime)
);

CREATE TABLE Bookings (
    BookingID INT PRIMARY KEY IDENTITY(1,1),
    FacilityID INT,
    UserID INT,
    TimeSlotID INT,
    BookingDate DATE NOT NULL DEFAULT GETDATE(),
    BookingStatus VARCHAR(50) NOT NULL,
    CONSTRAINT FK_Bookings_Facilities FOREIGN KEY (FacilityID) REFERENCES Facilities(FacilityID) ON DELETE CASCADE,
    CONSTRAINT FK_Bookings_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    CONSTRAINT FK_Bookings_Times FOREIGN KEY (TimeSlotID) REFERENCES TimeSlots(TimeSlotID),
    CONSTRAINT UQ_Booking_UniqueSlotPerDay UNIQUE (FacilityID, TimeSlotID, BookingDate)
);

CREATE TABLE Trainers (
    TrainerID INT PRIMARY KEY IDENTITY(1,1),
    Name VARCHAR(100) NOT NULL CONSTRAINT UQ_Trainer_Name UNIQUE,
    Specialization VARCHAR(100) NOT NULL,
    AvailabilityStatus BIT NOT NULL DEFAULT 1
);

CREATE TABLE TrainerBookings (
    BookingID INT PRIMARY KEY IDENTITY(1,1),
    TrainerID INT,
    UserID INT,
    TimeSlotID INT,
    BookingDate DATE NOT NULL DEFAULT GETDATE(),
    BookingStatus VARCHAR(50) NOT NULL,
    CONSTRAINT FK_TrainerBookings_Trainers FOREIGN KEY (TrainerID) REFERENCES Trainers(TrainerID) ON DELETE CASCADE,
    CONSTRAINT FK_TrainerBookings_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    CONSTRAINT FK_TrainerBookings_Times FOREIGN KEY (TimeSlotID) REFERENCES TimeSlots(TimeSlotID),
    CONSTRAINT UQ_TrainerSlot UNIQUE (TrainerID, TimeSlotID)
);

CREATE TABLE PaymentStatuses (
    PaymentStatusID INT PRIMARY KEY IDENTITY(1,1),
    StatusName VARCHAR(50) NOT NULL CONSTRAINT UQ_PaymentStatus_Name UNIQUE
);

CREATE TABLE Payments (
    PaymentID INT PRIMARY KEY IDENTITY(1,1),
    MembershipID INT,
    UserID INT,
    Amount INT NOT NULL,
    PaymentDate DATE NOT NULL,
    PaymentType VARCHAR(50) NOT NULL,
    PaymentStatusID INT,
    CONSTRAINT FK_Payments_Memberships FOREIGN KEY (MembershipID) REFERENCES Memberships(MembershipID) ON DELETE CASCADE,
    CONSTRAINT FK_Payments_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE NO ACTION,
    CONSTRAINT FK_Payments_Status FOREIGN KEY (PaymentStatusID) REFERENCES PaymentStatuses(PaymentStatusID)
);

CREATE TABLE Feedback (
    FeedbackID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT,
    Content TEXT NOT NULL,
    Rating INT CONSTRAINT CHK_ValidRating CHECK (Rating BETWEEN 1 AND 5),
    FeedbackDate DATE NOT NULL,
    CONSTRAINT FK_Feedback_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    CONSTRAINT UQ_Feedback_Per_Day UNIQUE (UserID, FeedbackDate)
);
GO

-- 3. Views for Easier Reporting
CREATE VIEW user_membership_view AS
SELECT u.UserID, u.Username, m.MembershipID, mt.TypeName AS MembershipType, m.StartDate, m.EndDate
FROM Users u
INNER JOIN Memberships m ON u.UserID = m.UserID
INNER JOIN MembershipTypes mt ON m.MembershipTypeID = mt.MembershipTypeID;
GO

CREATE VIEW user_payments_view AS
SELECT u.UserID, u.Username, p.PaymentID, p.Amount, p.PaymentDate, p.PaymentType, ps.StatusName AS PaymentStatus
FROM Users u
INNER JOIN Payments p ON u.UserID = p.UserID
INNER JOIN PaymentStatuses ps ON p.PaymentStatusID = ps.PaymentStatusID;
GO

CREATE VIEW trainers_of_users AS
SELECT u.UserID, u.Username, t.TrainerID, t.Name, t.Specialization, ts.StartTime, ts.EndTime, tb.BookingStatus
FROM Users u
JOIN TrainerBookings tb ON u.UserID = tb.UserID
JOIN Trainers t ON t.TrainerID = tb.TrainerID
JOIN TimeSlots ts ON tb.TimeSlotID = ts.TimeSlotID;
GO

-- 4. Initial Seed Data
INSERT INTO MembershipTypes (TypeName, Price) VALUES ('Silver', 5000), ('Gold', 10000);
INSERT INTO PaymentStatuses (StatusName) VALUES ('Pending'), ('Successful');
INSERT INTO TimeSlots (StartTime, EndTime) VALUES ('09:00', '10:00'), ('10:00', '11:00'), ('11:00', '12:00');
GO

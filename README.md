# Learn From The Pros

# Project Development Prompt: Skills Exchange Platform

Act as a professional full-stack web developer, UI/UX designer, and software architect. Help me design and develop a complete, modern, secure, and user-friendly web application called **"Skills Exchange – Professional Learning and Skill Sharing Platform."**

## 1. Project Overview

The Skills Exchange Platform connects students and learners with experienced professionals from multiple industries. Students can learn practical skills directly from professionals through paid monthly learning programs.

The platform must support multiple professions, different courses, and multiple languages so learners can communicate and learn in their preferred language.

This is a paid learning platform where students pay for monthly classes and professionals receive their earnings after successfully completing the agreed monthly teaching sessions.

## 2. Two Separate Login and Registration Systems

Create two different registration and login portals.

### A. Student / Learner Portal

Student registration should include:
- Full name
- Unique username
- Email address
- Password
- Preferred language
- Education level
- Degree or department
- Interested course or skill
- Learning goals

Student dashboard features:
- Browse available professionals.
- Search professionals by profession, skill, experience, and language.
- View professional profiles.
- Send five free chat messages before purchasing a learning plan.
- Purchase monthly learning plans.
- Communicate with professionals.
- Schedule and attend classes.
- Track learning progress.
- View payment history.
- Give ratings and reviews.

### B. Professional Portal

Professional registration should include:
- Full name
- Unique username
- Email address
- Password
- Profession or industry
- Skills they can teach
- Years of experience
- Current employment status
- Current workplace or company name (if employed)
- Teaching languages
- Educational qualifications
- Certificates and experience documents
- Expected monthly salary

Professional dashboard features:
- Create and manage professional profiles.
- Add multiple skills and courses.
- Set monthly course fees.
- Select teaching languages.
- View student requests.
- Communicate with students.
- Manage class schedules.
- Track completed and pending classes.
- View monthly earnings.
- Receive payments after completing agreed monthly classes.

## 3. Multiple Professions and Courses

The platform must support different professional categories, such as:

- Software Development
- Web Development
- Java Development
- Python Programming
- Data Science
- Artificial Intelligence
- Machine Learning
- UI/UX Design
- Graphic Design
- Digital Marketing
- Business Management
- Accounting
- Communication Skills
- Photography
- Video Editing
- Other professional skills

Allow professionals to add multiple skills and learners to select multiple learning interests.

## 4. Multiple Language Support

The platform must support multiple languages, including:
- English
- Tamil
- Hindi
- Telugu
- Malayalam
- Kannada
- Other languages

Students should be able to filter professionals according to their preferred teaching language.

The website interface should also support language selection.

## 5. Five Free Chat Messages

Every student should receive five free chat messages to communicate with professionals before purchasing a learning plan.

Requirements:
- Display the remaining free message count.
- Reduce the count whenever a free message is sent.
- Allow students to communicate with professionals before payment.
- After using all five free messages, require the student to purchase a learning plan to continue chatting.
- Prevent users from bypassing the free-message limit by creating repeated conversations.

## 6. Monthly Paid Learning System

This platform must follow a monthly subscription-based learning model.

Student payment workflow:
1. Student selects a professional.
2. Student views the professional's profile, experience, skills, and monthly fees.
3. Student selects a monthly learning plan.
4. Student makes payment.
5. Student receives confirmation.
6. Professional starts the agreed classes.
7. The system tracks attendance and completed classes.
8. After successful completion of the monthly agreement, the professional receives payment.

Professional payment requirements:
- Monthly earnings dashboard.
- Payment history.
- Completed class records.
- Pending payment records.
- Secure payment processing.
- Refund and dispute management.

Do not release payments automatically without checking the agreed class completion conditions.

## 7. Professional Verification and Security

Security is one of the most important requirements.

Implement:
- Email verification.
- Secure password hashing.
- Role-based authentication.
- Student and professional access separation.
- Professional identity verification.
- Qualification and certificate verification.
- Admin approval before professionals can offer paid courses.
- Secure chat functionality.
- Report and block options.
- Fake profile detection and moderation.
- Protection against unauthorized access.
- Secure payment processing.
- Input validation and protection against common web attacks.

Unverified professionals must not be allowed to provide paid learning services.

## 8. Admin Dashboard

Create a separate admin portal.

Admin features:
- Manage student accounts.
- Verify professional accounts.
- Approve or reject professional applications.
- Manage professions and courses.
- Manage supported languages.
- Monitor transactions.
- Manage refunds and disputes.
- Handle reported users.
- Suspend fake or suspicious accounts.
- View platform statistics.

## 9. Main Website Pages

Create the following pages:

1. Home Page
2. About Us
3. Student Registration
4. Student Login
5. Professional Registration
6. Professional Login
7. Student Dashboard
8. Professional Dashboard
9. Browse Professionals
10. Professional Profile
11. Course Details
12. Chat and Messaging
13. Monthly Subscription and Payment
14. Class Scheduling
15. Learning Progress
16. Earnings Dashboard
17. Admin Dashboard
18. Contact Us
19. Help and Support

## 10. UI/UX Design Requirements

Create a professional, modern, responsive design.

Requirements:
- Attractive home page.
- Simple navigation.
- Separate student and professional login interfaces.
- Modern dashboard layouts.
- Professional profile cards.
- Search and filter options.
- Responsive design for mobile, tablet, and desktop.
- Consistent colors, fonts, icons, and spacing.
- Light and dark modes.
- User-friendly forms.
- Clear payment and subscription interfaces.

## 11. Recommended Technology Stack

Frontend:
- HTML5
- CSS3
- JavaScript

Backend:
- Java
- Spring Boot
- Spring Security
- REST APIs

Database:
- MySQL

Additional technologies:
- WebSocket for real-time chat.
- Razorpay for payment integration.
- Secure authentication and authorization.
- Git and GitHub for version control.

## 12. Database Design

Create a properly normalized MySQL database with tables for:
- Students
- Professionals
- Admins
- Skills
- Professions
- Courses
- Languages
- Student Interests
- Professional Verification
- Chat Messages
- Free Chat Usage
- Subscriptions
- Payments
- Class Schedules
- Attendance
- Class Completion
- Reviews and Ratings
- Reports and Complaints

Define primary keys, foreign keys, relationships, and appropriate constraints.

## 13. Development Instructions

Develop this project step by step.

First, provide:
1. Complete project architecture.
2. System workflow.
3. Database schema and ER diagram.
4. Frontend page structure.
5. Backend package structure.
6. API endpoint design.
7. Authentication and security workflow.

Then implement each module separately with complete working code.

Explain the code in beginner-friendly English. Do not skip important steps. Ensure frontend, backend, and database are properly integrated.

**Final Goal:** Build a fully functional, secure, multilingual, monthly paid professional learning platform that connects students with verified professionals and makes practical skill development accessible to everyone.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://learn-from-the-pros.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6439b3eb-f755-43a0-9507-eac419217059).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

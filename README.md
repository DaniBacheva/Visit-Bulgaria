# VISIT BULGARIA 
Visit Bulgaria is a web-based application designed to encourige people to find or describe the most beautiful places in Bulgaria to visit. 

## Table of Contents
- [Recommended Requirements](#recommended-requirements)
- [Test User Credentials](#test-user-credentials)
- [Technologies Used](#technologies-used)
- [How to Access](#how-to-access)
- [Installation and Running the Application](#installation-and-running-the-application)
- [Site Structure](#site-structure)


## Recommended Requirements

For the best experience using our application, we recommend the following settings and hardware:

- **Display Resolution:** Full HD (1920x1080 pixels) or higher. Our application's interface is designed to look best at a width of 1920 pixels, ensuring that all elements are displayed correctly and are easily navigable.

- **Browser:** Latest version of Chrome, Firefox, Safari, or Edge. We strive to support the latest web standards and features, and using an up-to-date browser will ensure compatibility and security.


## Admin - email: peter@abv.bg password:123456

## Technologies Used

This project is built using React: A library for building single-page client applications using HTML and JSX.

## How to Access

Access to Visit Bulgaria`s features is tailored to:

- **Non-Registered and Logged-Out Users:** Visitors who have not registered or are not logged in can browse the public sections of the site, such as the homepage, places listing and their details, but will not have the ability to interact with content or access the full features available to registered members.

- **Registration Process:** To unlock the full potential of this application, users are encouraged to register. The registration process requires a username, email, and password. Upon successful registration, users will have unlimited access to the platform

- **Benefits for Registered Users:**
  - **Create and Edit Places to visit:** Registered users can create their own listings, edit and delete them.
  - **Personal Profile Management:** Provides your user profile and bookmark your added places.
  - **Comment:** Leave comments on Places.


## Installation and Running the Application

Follow these steps to get the Visit Bulgaria application up and running on your local machine for development and testing purposes.

 ### Client Application Setup

   **Clone the Repository:** 
   You can clone the repository using the following command or download it as a ZIP file and extract it on your computer.

   git clone https://github.com/DaniBacheva/Visit-Bulgaria

1. Navigate to the Project Directory:

Use the terminal to navigate to the project directory.

cd bulgaria

2. Install Dependencies:

Install all the necessary dependencies by running the following command in your terminal:

npm install   

3. Run the Client Part:
Start the React server with this command:

npm run dev

4. Open the Project:
Access the application by opening the following URL in a web browser:
http://localhost:5173/


   ### Server part Setup
1. Navigate to the Server Directory:
   
cd server

3. Install Server Dependencies and Start the Server
Install the dependencies using npm install

Start the server with command

node ./server.js

   #### Running the Server:

Once the server is started, it will listen for requests on:
http://localhost:3030/

## Site Structure

The Visit Bulgaria website is designed with a user-friendly and intuitive structure to ensure easy navigation and a pleasant user experience. Below is an overview of the key components of the site:

### Homepage

- **Navigation Bar:** Provides quick links to the main sections of the site including Places Catalog, Add new place, User Profile. Also includes login/sign-up options.
- **catchy slogan:** An invitation to visit the most beautiful corners of Bulgaria.


### Places Catalog

- **Listing of places :** Each place includes a name, image, description and a link to a detailed guide.

### User Profile

- **Profile Information:** Users can view their their added places ang their details.
- **My Added places:** Users can create their own places ,edit and delete them as well as add comment for all availeble placess.


### Comment Forum

- **Posts:** Users can add new comments for all available placess.


### How to Access

- **Access Restrictions:** Non-registered users have limited access to the site's features. Full access is granted upon registration.
- **Registration Process:** Users can sign up with their email and password to gain full access to all features.

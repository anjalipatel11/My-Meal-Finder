# inst377_final_project

#Project Title
My Meal Finder

#Description
My Meal Finder is a web application to make finding and choosing meals easier for users. It uses an external API (TheMealDB) to access data regarding different ingredients and meals. The application allows users to search for meals by ingredients and view detailed its respective detailed information (ingredient list, instructions, cuisine, etc.) along with allowing users to save their favorite meals for easy access.

#Target Browsers
As of now, the target browser is Desktop browsers (most specifically, Google Chrome)

-----

#Developer Manual

#Audience
This document is for future developers that will maintain and enhance My Meal Finder.

#Installation Instructions
1. Clone the repository:
     git clone https://github.com/yourusername/MyMealFinder.git
2. Navigate to the project directory in your terminal
3. Install the dependencies:
     npm install
4. Create variables for your own Supabase URL and Key:
     SUPABASE_URL = your_supabase_url
     SUPABASE_KEY = your_supabase_anon_key

#Running the Application
To start the server:
  node server.js
The backend of the project will run on http://localhost:3000
Open the homepage.html in a browser

#Running Tests
There are no specified tests

#API Endpoints
  GET Method:
    - /api/saved-meals    ---> Retrieves all of the saved meals from the Supabase database
    - /api/meal-info/:id    ---> Retrieves the meal information from TheMealDB (name, area, and category)

#Known Bugs & Future Roadmap
- Known bugs:
      - The external API may sometimes fail because of network issues which can cause delayed responses on the application
      - The front-end could be improved for user inputs
      - The saving and removing from the Supabase may be delayed
- Future roadmap:
      - Add more user customization for personalized meal saving (e.g. incorporating allergies)
      - Implement more API endpoints
      - Improve the UI/UX for more browsers, both desktop and mobile

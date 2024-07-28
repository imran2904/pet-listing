# Pet Listing Application

## Introduction

This is a simple Pet Listing Application built using React, Bootstrap, and Tailwind CSS. The application allows users to search for pets by animal type, location, and breed.

## Project Structure

/pet-listing-app
├── public
│ ├── index.html
├── src
│ ├── components
│ │ ├── PetDetails.js
│ │ ├── PetList.js    
│ │ ├── SearchForm.js
│ ├── context
│ │ ├── PetContext.js
│ ├── services
│ │ ├── api.js
│ ├── App.js
│ ├── index.js
│ ├── HomePage.js
│ ├── HomePage.css
├── README.md
├── package.json



## Design Decisions

1. **Component-Based Architecture:** The application is divided into reusable components like `SearchForm`, `PetList`, and `PetDetails`.
2. **Context API:** The Context API is used to manage the state of the pets throughout the application.
3. **Styling:** The project uses a combination of Bootstrap for basic styling and Tailwind CSS for additional customizations.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/pet-listing-app.git
    cd pet-listing-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Run the application:
    ```sh
    npm start
    ```

The application should now be running at `http://localhost:3000`.

## API Service

The `searchPets` function in `src/services/api.js` is responsible for fetching pet data from the API. Make sure to replace any placeholder URLs with actual API endpoints if necessary.

## Contact

For any questions or issues, please contact [imarankhan9768@gmail.com].

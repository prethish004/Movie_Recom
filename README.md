# Login Page

![image](https://github.com/user-attachments/assets/effc988d-5255-458f-a2ff-1835ff97926e)

# Register Page
![image](https://github.com/user-attachments/assets/5295434f-5ffc-4849-a499-86ff27faee90)

# Home Page
![image](https://github.com/user-attachments/assets/9a044772-908b-4c38-8b9a-9dcb63a0d302)

# Selected Movie Page
![image](https://github.com/user-attachments/assets/064595e8-67a4-43e8-8250-8692bc5c5b0d)

# Searched Movies 
![image](https://github.com/user-attachments/assets/72a87857-4cd7-4b07-a57a-f4d9e52ff713)

# Genre Categories Page
![image](https://github.com/user-attachments/assets/22b43243-fdfe-4a7c-977a-5a47654ccb45)


### Host Link=="https://movie-recommendation-xi.vercel.app/".



---
# Firebase
## Firebase Integration

This project uses Firebase for authentication and backend services. Firebase provides a comprehensive suite of tools for building web and mobile applications, including authentication, real-time databases, cloud storage, and more.

### Firebase Setup

To use Firebase in this project, the following services are utilized:

1. **Firebase Authentication**: 
   - Enables users to sign in to the application using email and password or third-party providers like Google.
   - Features implemented include user registration, login, logout, and password reset.

2. **Firebase Configuration**:
   - The Firebase configuration object is located in the `firebase.js` file. This object contains essential keys and identifiers required to initialize Firebase.

### Environment Variables

To keep sensitive information secure, environment variables are used for Firebase configuration. Ensure these are set up in your hosting environment (e.g., Vercel). The variables include:

- `REACT_APP_apiKey`
- `REACT_APP_authDomain`
- `REACT_APP_projectId`
- `REACT_APP_storageBucket`
- `REACT_APP_messagingSenderId`
- `REACT_APP_appId`

### Authentication Methods

The following authentication methods are supported:

- **Email and Password Authentication**: Users can register and log in using their email addresses and passwords.
- **Google Sign-In**: Users can log in using their Google accounts. This is facilitated through Firebase's integration with Google Auth Provider.

### Firebase Authentication Functions

- **`registerUser(email, password, displayName)`**: Registers a new user with the provided email, password, and display name.
- **`login(email, password)`**: Authenticates a user using email and password.
- **`userObserver(setCurrentUser)`**: Observes the user's authentication state and updates the current user.
- **`logout()`**: Signs out the currently logged-in user.
- **`signUpProvider()`**: Handles Google Sign-In using a popup.
- **`forgotPassword(email)`**: Sends a password reset email to the specified email address.

### Deployment Considerations

- **Authorized Domains**: Ensure that all domains that host the application (e.g., localhost, production domain) are added to the Firebase project's authorized domains list. This is crucial for enabling OAuth providers like Google.

### Security and Best Practices

- **Do not commit Firebase API keys**: Even though Firebase config keys are not considered sensitive, it's best practice to keep them secure and not commit them to source control. Use environment variables to manage these configurations.
- **Firestore Security Rules**: If using Firestore or Realtime Database, make sure to set up proper security rules to protect your data.

---
# TMDB Api
## TMDb API Integration

This project integrates with The Movie Database (TMDb) API to fetch movie-related data. TMDb is a popular, community-maintained source of movie and TV information. It provides extensive information on movies, TV shows, actors, and more.

### API Key Setup

To use the TMDb API, an API key is required. Follow these steps to obtain and use your API key:

1. **Obtain an API Key**:
   - Visit [TMDb's API page](https://www.themoviedb.org/documentation/api) and sign up or log in.
   - Navigate to your account settings and create an API key.

2. **Configure the API Key**:
   - Store the API key in a secure manner, such as using environment variables. For example, you can set the API key as `REACT_APP_TMDB_API_KEY`.

### Features

The project utilizes TMDb API to fetch the following details:

- **Video**: Retrieves trailers or other video content associated with movies.
- **ID**: Each movie is identified by a unique ID provided by TMDb, used to fetch specific details.
- **Release Date**: The date when the movie was released in theaters.
- **Rating**: The average rating of the movie, as rated by users on TMDb.
- **Overview**: A brief summary or synopsis of the movie's plot.

### Example API Usage

Below are examples of how TMDb API endpoints are used in the project:

- **Fetching Movie Details**:
  ```javascript
  const fetchMovieDetails = async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    const data = await response.json();
    return data;
  };
  ```

- **Fetching Movie Videos**:
  ```javascript
  const fetchMovieVideos = async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    const data = await response.json();
    return data.results;
  };
  ```

### Environment Variables

To securely manage the TMDb API key, use the following environment variable:

- `REACT_APP_TMDB_API_KEY`: Your unique TMDb API key.

### Best Practices and Considerations

- **Do Not Expose API Key**: Ensure that the API key is not exposed in the frontend code or in public repositories. Use environment variables to manage API keys securely.
- **Rate Limiting**: Be aware of TMDb's rate limits. Optimize API calls to avoid exceeding these limits, which could result in temporary bans.

### Additional Resources

For more detailed information, visit the [TMDb API Documentation](https://developers.themoviedb.org/3).

---

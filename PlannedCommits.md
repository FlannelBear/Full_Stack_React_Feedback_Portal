# Feedback Portal Loop - Weekend Challenge 7
> Date: 06/30/2018

## Planned Git Commits
* [x] Init
* [x] Planned Commits List
* [x] Install dependencies:
    - react-router-dom
    - redux
    - react-redux
> Branch: reduxStore-setup
* [x] Set up reduxStore in index.js
* [x] Build FeedbackReducer:
    - action.type for GET from db through server
    - action.type for feeling, understanding, support, comment
    - state:
    ```
    state: { feedback: [ 
        ...response.data
    ], entry: {
        feeling: int,
        understanding: int,
        support: int,
        comment: string
    } };
    ```
    - logic for feeling, understanding, support, comment
> Branch: Server-side routers
* [x] Build a router for /feedback
    - GET
    - POST
    - DELETE
> Branch: routing
* [x] Set up Hashrouter in App.js
* [x] Create 6 Pages:
    - Feeling
    - Understanding
    - Support
    - Comment
    - Thankyou
    - Admin
> Branch: basic-components
* [x] Build Question Component:
    - Boilerplate React Component
    - reduxStore connection
    - Input fields connected to local state
    - dispatch input to reduxStore (FeedbackReducer)
* [x] Build Next Button Component:
    - Boilerplate React Component
    - Link to next page
* [x] Add Question Component to Each Page:
    - Import component
    - Pass 'next' (url to next page) and 'question' (question string for card) via props
* [x] Build Submit Button Component:
    - Boilerplate React Component
    - Axios POST
* [x] Build AdminTable Component:
    - Boilerplate React Component
    - Table structure
    - Axios GET
> Branch: add-material-ui
* [x] Install @material-ui/core
* [x] Refactor each component to use material-ui
    - Question
    - Next Button
    - Submit Button
    - AdminTable
* [x] Build Header Component using material-ui
* [x] Add Header to App.js
>Branch: statusbar-component
* [x] Build StatusBar Component using material-ui
* [x] Add StatusBar to each Page
>Branch: finish-project
* [x] Final Styling
>Material Table
* [ ] Style Admin Table
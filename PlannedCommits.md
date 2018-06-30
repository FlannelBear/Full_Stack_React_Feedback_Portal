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
* [ ] Build FeedbackReducer:
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
* [ ] Build a router for /feedback
    - GET
    - POST
    - DELETE
> Branch: routing
* [ ] Set up Hashrouter in App.js
* [ ] Create 6 Pages:
    - Feeling
    - Understanding
    - Support
    - Comment
    - Thankyou
    - Admin
> Branch: basic-components
* [ ] Build Question Component:
    - Boilerplate React Component
    - reduxStore connection
    - Input fields connected to local state
    - dispatch input to reduxStore (FeedbackReducer)
* [ ] Build Next Button Component:
    - Boilerplate React Component
    - Link to next page
* [ ] Add Question Component to Each Page:
    - Import component
    - Pass 'next' (url to next page) and 'question' (question string for card) via props
* [ ] Build Submit Button Component:
    - Boilerplate React Component
    - Axios POST
* [ ] Build AdminTable Component:
    - Boilerplate React Component
    - Table structure
    - Axios GET
> Branch: add-material-ui
* [ ] Install @material-ui/core
* [ ] Refactor each component to use material-ui
    - Question
    - Next Button
    - Submit Button
    - AdminTable
> Branch: header-component
* [ ] Build Header Component using material-ui
* [ ] Add Header to App.js
>Branch: statusbar-component
* [ ] Build StatusBar Component using material-ui
* [ ] Add StatusBar to each Page
>Branch: final-styling
* [ ] Final Styling
# CookBook - Portfolio Project 5

![responsive proj 5](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/3e450189-2aa6-44d4-9b9e-d69eba3f7b19)

- Deployed site link: https://cookbook-react-project-5.herokuapp.com/
- Deployed back-end cookbook.api link: https://cookbook-project-5.herokuapp.com/

## Project Goals
The aim for this project was to be able to build a content-sharing web application with React and API (Django Rest Framework) Back-End. Users are able to create an account and share their own recipes blogs, while viewing other recipe blogs that they can like and comment on, follow other users and create a shopping list to ensure they have everything the need to follow these recipes.
The target audience would be anyone who is interested in food, cooking, drinks or who wants to learn more and try to cook more. This app allows interactivity between different users as they cn comment and like other posts to review recipes or ask questions to the user about their post.


## User Stories - link to Kanban Project Board
The user stories have been documented as a project that displays which user stories have been completed and which haven't. The Project board has been linked to this repository.

The Link to the board can be found here:
https://github.com/users/dhrutibhudia97/projects/4/views/1?layout=board

## Wireframes (Desktop and Mobile)
The wireframes were made with Balsamiq.

Home Page - Logged Out 
- ![home page - logged out - desktop](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/839ceb0f-195e-4b6b-86bd-9ff2645f07f7)
- ![home page - logged out - mobile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/c3674bb7-52e8-4c65-bf5b-aa78d359d547)

Home Page - Logged In
- ![home page - logged in - desktop](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/4a246f84-91f2-4948-b6e4-cefd3a1c9f10)
- ![home page - logged in - mobile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/532fadbb-58f0-4aad-8f1b-fc66997df07a)

My Faves
- ![liked - desktop](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/b21e30de-6839-43ca-90a4-15795dc80f12)
- ![liked - mobile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/c439aa37-4641-4de0-a84b-c86a3747eaab)

Posts Page
- ![posts page - desktop](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/7a8f1aba-f64d-4f5e-8711-90dcec87c3df)
- ![posts page - mobile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/db8e790e-f389-4054-8228-3b43fd28087c)

Profiles Page
- ![profiles - desktop](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/c5528ea9-40d1-4838-9704-97f89e4324fc)
- ![profiles - mobile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/780c21c4-b7c6-4294-80ff-93075d004b13)

Shopping List
- ![shopping list - desktop](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/d8a6eff2-fcda-4780-999a-ef792a461167)
- ![shopping list - mobile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/d6780fdd-2143-45f8-9d8d-9939de33f1cb)

Sign Up
- ![sign up - desktop](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/8e0ed661-dc14-49c4-abed-d4fa1c6f03d8)
- ![sign up - mobile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/ff8f5852-85bb-4dab-b304-a2d5262f3e34)

Sign In
- ![sign in - desktop](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/7b8e2bd3-5b3d-442d-a499-fb5a87c9a01b)
- ![sign in - mobile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/ca8bad80-261a-49d1-891d-1cf04e300960)


## Features 
### Sign Up
- Users that are not logged in can access this Sign Up Page.
- ![features sign up](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/787bb826-da74-470a-be99-6dc43d88dfa9)

#### Valid input required
- Cannot username that already exists, or passwords that are too short, entirely numerical, not matching.
- ![sign up valid input](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/894e5a9b-f942-45d6-b93f-b733d74c6f77)

### Sign In
- Users that are not logged in can access this Sign In Page.
- ![feature sign in](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/c282836d-ba84-43ad-867f-ae9d8552ed60)

#### Valid input required
- Cannot sign in with invalid input.
- ![sign in valid input](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/312449c3-67b1-45a7-8813-bb1a0028de18)

### Home (logged out)
- Home Page accessible when logged out. User unable to like or comment on posts, follow/unfollow profiles or access certain pages.
- ![homepage logged out](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/75cfda6d-1fb3-480d-aa4c-92ba9b1673af)

#### Navigation bar when logged out
- Shows minimal options, can only access limited home, sign in and sign up pages.
- ![nav bar logged out](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/7d3b5afb-0ac9-4e28-bccb-2f91ebcd8a09)

### Home (logged in)
- User can now like and comment on posts, follow and unfollow other profiles and access more pages.
- ![home page logged in](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/90aa8b7a-ac0b-4de0-90cb-d51e816b163d)

#### Navigation bar with added access to site
- Added access to Add Post, My Faves, My Profile and Shopping List. 
- ![navbar logged in](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/8de03a50-8029-46a4-af8a-c88b8beb49bd)

### Search Bar 
- Search bar in homepage to search for specific posts, keywords, ingredients and users.
- ![search bar home](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/5f0a79c8-6fd5-446e-b6c7-7a6200caa691)

- Search bar in shopping list page to search for specific items.
- ![search bar shopping list](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/21fb19bc-6f45-4d81-afef-bd347cdbfb8d)

### Creating a Post
- Logged in users can create a post by liking on item in navigation bar.
- They need to upload and photo and add a title, keywords, ingredients and a method.
- ![add a post](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/d5679ad9-c1c4-42a4-9557-3a62ba87381e)

### Editing a post
- To edit a post, you need to be the owner of the post. Click on post and then click on three dot icon at top right. Icons available are edit or delete.
- ![edit icon](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/dd6308f9-ba98-43fc-b94e-a9ffb6075171)

- Clicking edit icon, brings you to the edit post page, all sections prefilled with present input.
- ![edit post](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/c819702f-2173-4a52-92a2-c7ecaf656d55)

### Liking a Post
- Able to like a post when logged in. Icon becomes red and number of likes increases by one.
- ![like post](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/0d90fb32-1c2c-4d93-aec3-9dcd9d830d48)

#### logged out state
- Cannot like posts when not logged in, message pops up when user hovers over icon.
![like logged out](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/087d48f5-b75d-4129-a677-a5b918ff1c6a)

#### like own post response
- Cannot like own post, message pops up to user.
- ![like own post](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/30eb0027-ec45-4e92-a447-88231fa53f49)

### Commented a Post
- Creating a comment as a logged in user.
- ![commenting](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/2a4b01e7-c3d9-4e09-82f2-ebde32813eb4)

- Editing a comment you have previously mde by clicking on three dot icon on top right of comment.
- ![comment edit](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/6ca7473f-84fa-415d-a0c9-ba97a719bab9)

#### logged out state 
- Option to make comment not available when logged out, only able to review comments already present on the post.
- ![comment logged out](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/2e774085-0c17-43b7-9ce8-a1bb5126dd7c)

### Top profiles
- Available to see on right of home page when logged in. Able to follow and unfollow users when logged in.
- ![Top Profiles](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/11945d67-9767-4f00-844f-710efd689e15)

#### Follow/ Unfollow buttons
- When user logged out, option to follow/ unfollow users is not present.
- ![top profiles logged oit](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/cb12456b-8ad6-4c22-8355-f226047722b9)

### Profiles Page
#### Own Profile
- Able to see number of posts, followers and following, number updated immediently after this changes.
- ![own profile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/4a7d4245-6e08-4f27-b715-a2794fc62cf0)

#### Other users profile
- Added feature of follow/unfollow button when clicking on another users profile.
- ![users profile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/c725cefe-8df0-40a2-920b-446789d5e2d0)

#### Edit profile 
- To edit own profile, click on icon at top right. Can also edit username and password.
- ![profile edit icon](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/157cabeb-8555-4e8b-bf19-bc4d2b3e7ce4)

- Sections are prefilled with previous input.
- ![edit profile](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/dd98837e-d602-4a48-852e-e8c2cb931779)

### My Faves
- Page that archives all liked posts.
- ![my faves](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/cef9669c-ad4c-480d-b574-24a088f0608a)

### Shopping List
- Shopping list page can be access by logged in users. Shows lists previously put in account.
- ![shopping list](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/54ab1e4a-d3b2-42b4-b637-2ee9c4a0e8d0)

#### Editing shopping list item
- Can edit items on shopping list by clicking icon on right of item.
- ![shopping list edit icom](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/8312bca1-67bc-420e-89eb-2b9f02a0cfce)

- Able to edit the item name and quantity and save changes. Edited item then shows up on shopping list.
- ![edit shopping list](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/c3c2a9e0-4b1f-43b8-8332-ee04a62bc6dc)

#### Deleting shopping list item
- Able to delete item on shopping list.
- ![shopping list delete](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/12211af4-6442-4bc2-a036-8d8335f8de3f)

### Page does not exist 
- When invalid url is typed in, user sees this page.
- ![page does not exist](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/1540cc5a-9f28-4bbe-b9f5-61d275797fc2)


## Manual Testing
I focussed on Manual testing over Automated testing. The Results are in this table.

| Feature Tested       | Steps taken                 | Results  |
|----------------------|-----------------------------|----------|
| Sign Up - Available for logged out users | Logged out of account and clicked on sign up page in the NavBar.| ✓ only available for logged out users |
| Sign Up - Form can be filled correctly to create a new account | Add valid username, password and confirm password | ✓ invalid suggestions results in message to user.|
Sign Up - Creating a new account successfully and waiting to be redirected to Sign In page | Created a new account, and being instantly redirected to sign in page | ✓ instantly redirected to sign in page|
| Sign Up - responsive on mobile devices and desktop | Signing Up for an account on mobile devices | ✓ - for android and OS devices, can sign up for an account and get redirected to sign in page|
|Sign In - Page available to logged out users | Logged out of account and clicked sign in page in the NavBar.| ✓ redirected me to sign in page |
Sign In - Can enter valid input and sign in | Inputted valid username and password and get redirected to homepage | ✓ - redirected to homepage of logged in account. |
| Sign In - responsive on mobile devices and desktop | On desktop and on mobile devices, attempt to sign in using valid username and password. |✓ - Successfully sign in on android devices. X - cannot sign in on OS devices (known bug with React and OS - in unfixed bug section.) |
| Sign Out - Available for users who are logged in only. | See if the sign out option is on the NavBar if I am logged in. When logged out option not available on NavBar | ✓ - sign out option available |
| Sign Out - Functionality | If i click the Sign Out option will I be signed out | ✓ - Signed out and back to homepage of non account holder |
| Sign Out - responsive on mobile devices and desktop | Sign out on both types of devices | ✓ - sign out worked |
| Homepage - logged in | As a logged in user see if I am able to access hompage and like/comment on posts and follow users on the top profiles list. | ✓ - able to like and comment on posts, and follow/unfollow buttons available to click |
| Homepage - logged out | As a logged out user to see if I am unable to  like/comment on posts on the homepage and if I can follow users on the top profiles list. | ✓ - not able to like and comment on posts, and follow/unfollow buttons to not available to click |
| Navigation Bar - logged out | When logged out see what options are available on the NavBar | ✓ - Only options available are Home, Sign Up and Sign In |
| Navigation Bar - logged in | When logged in, see if options available on navigation bar are different to logged out state | ✓ - Added options are the Profile, My Favourites and Shopping List |
|Posts Page - logged out - not able to post | As a logged out user seeing if the option to post is available | ✓ - Unable to create a post when logged out |
| Posts Page - logged in - create a post | As a logged in user seeing if create a post icon is available and I can successfully create a post | ✓ - icon available and can succussfully create a post |
| Post Page - logged in - new post created is and on the top of the homepage | After creating a post, being able to see the new post at the top of my home page | ✓ - new post created at the top of the home page |
| Post Page - responsive on mobile and desktop | Creating a post on mobile and desktop | ✓ - Can create a post on desktop if logged in. ✓ - Can create a post on Android phones. |
| Post Page - ability to only edit posts that I have created when logged in | Log in and and click and edit previous posts I have created, see if I can change the picture, Title, Keywords, Ingredients and Method Section. See if I can edit other users posts. | ✓ - Able to Edit my posts, unable to edit other users posts. |
| Liked - Cannot Like Posts if I am logged out | As a logged out user trying to like posts on my homepage | ✓ - unable to like posts, a message telling me to "log in to like posts" pops up. |
| Liked - Cannot like my own posts | As a logged in user, trying to like my own post | ✓ - message pops up "you cannot like your own posts" |
| Like - Able to like other users posts | As a logged in user, trying to like other users posts | ✓ - able to like other users posts, and the number of likes increases by 1 and the icon becomes shaded |
| Like - Able to unlike a previously liked post | As a logged in user, trying to unlike a post I have previously liked | ✓ - able to unlike post, number of likes decreases by 1 and icon becomes unshaded |
|Like - responsive on mobile and desktop | As a logged in user able to like and unlike posts on desktop and mobile | ✓ - Able to like and unlike posts |
| Comments - Cannot comment on Posts if I am logged out | As a logged out user trying to comment on posts on my homepage | ✓ - unable to comment posts, I get redirected to posts page and get to view comments, but no option to create a comment. |
| Comment - Able to comment on my own posts or other users posts | As a logged in user, trying to comment on my own post and other user posts| ✓ - Able to create and view comments I have made on mine or other users posts. |
| Comment - Able to edit comments I have previously made | As a logged in user, trying to edit previous comments I have made on either my post or other users posts| ✓ - able to edit previous comments I have made and read my new edited comments |
| Comment - Able to delete comments I have previously made | As a logged in user, trying to delete previous comments I have made on either my posts or other user posts | ✓  - comments have been deleted and I cannot see them anymore. |
|Comment- responsive on mobile and desktop | As a logged in user able to create, read, edit and delete comments on mine or other users posts. | ✓ - CRUD functionality for comments works on desktop and mobile devices. |
| Followers -  Logged out users cannot follow anyone | As a logged out user, see if the option to follow other users is available | ✓ - follow button is not available to click on if logged out |
| Followes - Logged in users can follow other users | As a logged in user, see if the option to follow other users is available to click, and see if it increases my following number and their followers number | ✓ - option to click "follow" for other users is available on the homepage. Doing so does increase my following number my one and their followers number by one which can be viewed in the profile page |
| Followers - Logged in users can unfollow users they currently follow. | As a logged in user I am unable to unfollow users and my following number decreases by one and their followers numbers decreases by 1. | ✓ - When i click unfollow, my followers number decreases by 1 and their followers number decreases by one, the unfollow button then changes to a follow button again. |
| Followers - responsive on mobile and desktop | As a logged in user I am able to follow and unfollow users on both desktop and mobile | ✓ - Can follow and unfollow user on desktop and mobile devices. |
|Shopping List - logged out user unable to access this page | As a logged out user, seeing if shopping list page is available to access | ✓ - Shopping list is not on the navigation bar when logged out. When logged out and accessing the page /shoppinglist - the shopping list page shows up, but with the message "shopping list is loading" and I am unable to add any items to an empty list."
|Shopping List - logged in users can access the shopping list page, saving previous items already added by them | As a logged in user try to access the shopping list page by the navigation bar and can see any previous items on the list that I have already added. | ✓ - Can access shopping list page and see previously made list items |
|Shopping List - able to create and read items on the shopping list. | as a logged in user attempt to add items and personalised quantity to the shopping list. | ✓ - able to add items and its quantity to the list and view it on the list immediently. |
|Shopping list - Edit items | As a logged in user, attempt to edit and items and its quantity on the list. | ✓ - item and quantity updated on the lists. |
|Shopping List - Delete items | As a logged in user, attempt to delete items on the shopping list | ✓ - item and its quantity deleted and removed from the list, I can no longer see it. |


## Validators
### HTML
- No errors or warning when link passed through [W3](https://validator.w3.org/)
- ![proj 5 html validator](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/dc26ead7-a3b9-4993-8926-d4ab8f5fda2d)


### CSS
- No errors when link passed through CSS validator [jigsawW3](https://jigsaw.w3.org/css-validator/)
- ![proj 5 css validator](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/2b47c090-47de-402b-ac15-b249e395dbaf)

### Javascript
- All javascript files were manually passed through the validator [jshint](https://jshint.com/)
- Warnings mainly consisted of "'import' is only available in ES6 (use 'esversion: 6').", "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)." and "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6')."

### Lighthouse
- Scored a 59 on lighthouse.
- ![proj 5 lighthouse](https://github.com/dhrutibhudia97/cookbook-react/assets/107180641/ca1e4e41-68f2-4aab-a67f-5921505988b8)


## Components 
There are 5 components used in this project.
- Asset - The spinner animation used in multiple pages throughout this project displayed while the features were still loading. (in the home page when posts and top profiles were loading, in shoppinglist while the shopping list was loading).
- Avatar - default avatar picture used for users who have not uploaded a profile picture.
- MoreDropdown - drop down menu used to edit components, either the profile, or editing comments or shopping list items.
- NavBar - Used at the top of all pages, customised for logged in or logged out users with matching icons.
- NotFound - Used for page not found when unknown url is accessed, shows user a message and icon to indicate wrong page.

### Hooks
There are two hooks used in this project.
- useClickOutsideToggle - used to close a drop down menu by clicking outside of the component.

- useRedirect - in the sign in, sign up and post create forms to redirect users after they logged in or created a post.


## Languages & Technologies 
- JavaScript
- CSS
- HTML
- Python
- React JS
- React bootstrap
- React library

### Other programs used
- [Font Awesome](https://fontawesome.com/)
- [Google Font](https://fonts.google.com/)
- [Gitub](https://github.com/)
- Gitpod
- [Heroku](https://heroku.com/)
- Axios
- msw
- jwt decode
- [Balsamiq](https://balsamiq.com/) - wireframes
- [Am I Responsive?](https://ui.dev/amiresponsive)
- [Pexel](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)


## Deployment 

This project was deployed on Heroku. Steps to deploy:
1. I created a repository in Github using the https://github.com/Code-Institute-Org/react-ci-template/ template and named it "cookbook-react".
2. On https://heroku.com/ I created a new app called "cookbook-react-project-5".
3. In the gitpod terminal I installed the following:
  - $ npm install
  - $ npm start
  - $ npm install react-bootstrap@1.6.3 bootstrap@4.6.0
  - $ npm install react-router-dom@5.3.0
  - $ npm install axios
  - $ npm install react-infinite-scroll-component
  - $ npm install msw --save-dev
  - $ npm install jwt-decode
4. Add a Procfile in the same level as your README.file and insert "web: serve -s build"
5. On heroku, link your react app to this Github repository in the deploy tab.
Make sure to git add, git commit and git push these changes.
6. On heroku go to existing api dashboard for this project, and add to the Config Vars "CLIENT_ORIGIN", the value being the url of the deployed react app on heroku.
7. Deploy your react app manually of heroku.


## Known errors/ unfixed bugs
- React bug with OS. Able to sign up for an account but unable to sign into that account on an apple phone. Sign Up and Sign In Function working for android phones and on desktop.

## Future potential features 
- Add rating system to to rate recipes out of fiv starts to replace like feature.
- Add calender feature to allow users to add specific recipe posts to specific dates to help them meal prep.

## Credits and Acknowledgements
- The **Code Institute - Moments module** which help build this project with the steps following meticulously. 
- Tutor Support with team institute to help me in my many moments of panic when any error arose.
- My mentor Adegbenga Adeye for helping with ideas to add to this app.
- (https://react.dev/learn/describing-the-ui#rendering-lists) - For helping me create the shopping list app.
- (https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/) - For helping me create the shoppinglist app.
- (https://getbootstrap.com/docs/4.0/utilities/sizing/) - helping with styling the shoppinglist app.



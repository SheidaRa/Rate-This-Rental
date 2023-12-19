# Rate Your Landlord

## Description
This is the source code for Rate Your Landlord web application with React front-end and Rails back-end.

"Rate Your Landlord" website, stands as a community-driven platform designed to empower tenants in sharing their experiences with landlords. Through this website, users can contribute reviews anonymously, offering valuable insights into landlord-tenant interactions. By enabling individuals to rate their landlords, we aim to foster transparency and accountability within the renting ecosystem. This platform serves as atool, empowering the community by providing a voice to tenants, guiding others in making informed decisions about their housing arrangements, and ultimately fostering better landlord-tenant relationships.


## Tech Stack
- ReactJS
- Ruby on Rails

# Local development

- Install node / npm
- Install PostgreSQL 16.1, run a PostgreSQL server and point to port 5432
- Install Ruby 3.2.2 and Rails 7.1.2
- In the client directory:
    ```terminal
    # Go to rate-landlord
    cd rate-landlord

    # install node packages
    *npm install --force is suggested*

    npm install @material-ui/core@4.12.4
    npm install @testing-library/jest-dom@5.17.0
    npm install @testing-library/react@13.4.0
    npm install @testing-library/user-event@13.5.0
    npm install @ubilabs/google-maps-react-hooks@2.0.2
    npm install bootstrap@5.3.2
    npm install leaflet@1.9.4
    npm install mdb-react-ui-kit@7.0.0
    npm install moment@2.29.4
    npm install react-bootstrap@2.9.1
    npm install react-dom@18.2.0
    npm install react-icons@4.12.0
    npm install react-leaflet@4.2.1
    npm install react-router-dom@6.19.0
    npm install react-scripts@5.0.1
    npm install react@18.2.0
    npm install web-vitals@2.1.4


    # start code
    npm start

    # visit localhost:3000 on browser
    ```
- In the server directory:
    ```terminal
    # Go to rate-landlord-api
    cd rate-landlord-api

    # Install gem dependencies
    bundle

    # Create Postgres DB and migrate the schema
    rails db:create
    rails db:migrate

    # Setup mailer
    export SENDMAIL_PASSWORD=wbqsqjtqlfwdcldf
    export SENDMAIL_USERNAME=ryourlandlord@gmail.com
    export MAIL_HOST=localhost:3001

    # start backend
    rails s


    # visit localhost:3001 on browser
    ```
### Developer notes
- There is still some race conditions error in rendering the app. Try reloading the page if encounter such errors or wait for the page to reload itself.
- Please confirm the email in your inbox after you sign up to make your account work
- The search bar is slow, please be patient.
-  For this version you need to choose the option "become a landlord" to be able to open the submitting a review option.

    ## Credits
  - All images and figures are obtained from the Canva images and graphics library
  - ChatGPT was used to help with adding comments to the code or formatting the order  (and centering divs ofc :) )



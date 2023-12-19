# Rate Your Landlord

## Description
This is the source code for Rate Your Landlord web application with React front-end and Rails back-end.

## Tech Stack
- ReactJS
- Ruby on Rails

# Local development

- Install node / npm
- Install PostgreSQL 16.1
- Install Ruby 3.2.2 and Rails 7.1.2
- In the client directory:
    ```terminal
    # Go to rate-landlord
    cd rate-landlord
    
    # install node packages
    npm i

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

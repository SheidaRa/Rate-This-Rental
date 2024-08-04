# Rate Landlord API

## Description
This is the backend API for the Rate Landlord application. It provides endpoints for managing landlord ratings, reviews, and related data.

## Local development

- Install PostgreSQL 16.1, run a PostgreSQL server and point to port 5432
- Install Ruby 3.2.2 and Rails 7.1.2

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

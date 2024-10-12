# Ve's Portfolio Site

This is a portfolio site for Ve to highlight his technical career and progress. This web app version is built on top of the portfolio template components from Magic UI.

# Features

-   Setup only takes a few minutes by editing the [single config file](./src/data/resume.tsx)
-   Built using Next.js 14, React, Typescript, Shadcn/UI, TailwindCSS, Framer Motion, Magic UI
-   Includes a blog
-   Responsive for different devices
-   Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/...
    ```

2. Move to the cloned directory

    ```bash
    cd <FOLDER_NAME>
    ```

3. Install dependencies:

    ```bash
    pnpm install
    ```

4. Start the local Server:

    ```bash
    pnpm dev
    ```

5. Open the [Config file](./src/data/resume.tsx) and make changes

## Using Docker

To use docker, build the local app from the Dockerfile, and run it as such.
Use the no cache flag if you want to hard start building the app. I recommend this especially when making package or dependency changes. Otherwise if you're rebuilding the app from code changes I recommend usin the default build option.

    ```bash
    docker build --no-cache -t ve-app .
    docker build -t ve-app .
    docker run ve-app

    ```

## Deploying an image to GCP Artifact Registry

These steps depend on building the app successfully first with docker, then tagging the image, and then pushing it to GCP artifact registry.

    ```bash

        gcloud auth login

        docker tag ve-app gcr.io/experimental-learning/ve-app:latest

        docker tag ve-app gcr.io/experimentation-learning/ve-app:latest

        docker push gcr.io/experimentation-learning/ve-app:latest

    ```

## Using Terraform

````bash

     # Initialization:

    terraform init
    # Initializes a new Terraform project, downloading necessary providers.
    terraform plan
    # Creates an execution plan, showing the changes that will be made to your infrastructure.
    terraform apply
    # Applies the changes defined in the execution plan, creating or modifying resources.
    terraform destroy
    # Destroys the resources defined in your configuration.

    # State Management:

    terraform state list
    # Lists the resources managed by Terraform.
    terraform state show
    # Shows details about a specific resource.
    terraform state pull
    # Pulls the current Terraform state from a remote backend.
    terraform state push
    # Pushes the current Terraform state to a remote backend.

# Other Commands:

    terraform output
    # Displays the values of defined outputs.
    terraform validate
    # Validates the syntax and structure of your Terraform configuration.
   ```
````

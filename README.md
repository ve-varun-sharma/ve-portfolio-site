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
    git clone https://github.com/dillionverma/portfolio
    ```

2. Move to the cloned directory

    ```bash
    cd portfolio
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

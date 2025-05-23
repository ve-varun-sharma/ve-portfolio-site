# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Refactor to use Winston logger instead of console.log for all Express routes

## [Released]

## [0.1.0] - 2024-7-01

### Added

- Project Setup
    - Typscript Support
    - Jest Testing Support
    - Docker Support
    - eslint support
    - Magic UI, Tailwind, Next set up
- Update portfolio site with Ve's information on background, activity, history, etc.

### Changed

## [0.1.1] - 2024-9-1

### Changed

    - updated npm packages:
        - @tailwindcss/typography 0.5.13
        - @tailwindcss/typography 0.5.15
        - @types/node 20.16.3 (22.5.2 is available)
        - @types/react 18.3.5
        - postcss 8.4.43
        - tailwindcss 3.4.10
        - typescript 5.5.4

## [0.1.1] - 2024-9-25

### Added

    -  Added news article section with up to date artcle data

### Fixed

    - Addressed typs in projects

## [0.1.2] - 2024-9-27

### Added

    -  Added additional news articles
    -  Added motion hovever for better user focus on activity cards

## [0.2.0] - 2024-9-27

### Added

    - Integrated client side Posthog Analytics for portfolio site
    - Add BlackFin Labs to Dock/Navbar

### Fixed

    - Navbar external clicks to open in new tab
    - Updated Resume copy

## [0.2.1] - 2024-9-27

### Added

    - Added updated activities with Elevate and LOI

### Fixed

    - Resume external clicks to open in new tab

## [0.3.0] - 2024-10-08

### Added

    - Added updated activities with Google
    - New backed-by social proof section
    - updated and added new skills to skills cloud

### Fixed

    - adjusted bio copy (WIP)
    - Rearranged news article section to be closer at the top

### Removed

    - Uneeded Ve Technologies logo at the bottom of the page

## [0.4.0] - 2024-10-11

### Added

    - Integrated docker with Next.JS app
    - New IaaC with Terraform for GCP

## [0.4.1] - 2024-10-15

### Fixed

    - Shortened main bio for easier readibility
    - Inversed navbar dock colors so that the nav bar stands out and users can see it
    - Tech advisor role year typo change.

## [0.4.2] - 2024-11-16

### Added

- New activities

### Fixed

- Cleaned up Nav bar

## [0.5.0] - 2024-12-24

### Added

    - Jest test suite framework - base layer of tests added
    - Tests added
        - utils
        - mode toggle component
        - config jests for frontend and backend
    - CircleCI for CI/CD

### Changed

        - TypeScript interoperability for jest, Next.JS

## [0.6.0] - 2024-12-31

### Added

- AI based layer E2E testing suite
    - Anthropic Model under the hood.
- Updated Circle CI to run E2E tests for CI/CD pipeline

## [0.6.1] - 2025-1-3

### Changed

- Updated activities to include Google Sizzle video.
- Updated resume to include new YGG experience

## [0.6.2] - 2025-04-8

### Removed

- Personal email from the portfolio site

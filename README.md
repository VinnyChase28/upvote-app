Breaking down the requirements and creating an implementation plan

## Ticket CS-1
1. Project Setup and Initial Commit

    Task: Initialize the project with Create React App using TypeScript. Add readme.

    Task: Set up a structured folder within src for the components, typically named components.

## Ticket CS-2
2. Implement the Upvote Component

    Task: Develop the Upvote component with TypeScript, ensuring it has default and selected states, which are visually distinguishable by background and arrow colors. The component should accept props for its state and a toggle function.

    Task: Integrate state management within the Upvote component to handle its selected/not-selected state. This will likely involve using React's useState hook.

    Task: If the application requires multiple UpvotesList components to interact or share state, set up a context or another state management solution.

## Ticket CS-3
3. Create the Upvotes List Component

    Task: Develop the UpvotesList component, which uses multiple Upvote components and manages their state collectively. This component should allow adding new Upvote components to the list.

    Task: Implement functionality to persist the state of the upvotes in the browser's localStorage, ensuring that the state is restored when the page is refreshed.

## Ticket CS-4
4. Add real posts with images
    Task: Create a card component to display post info and upvote buttons.
    Task: Create a posts feed that we can use to upvote and downvote posts.

## Ticket CS-5
5. Writing Tests

    Task: Write tests for the Upvote and UpvotesList components, focusing on interaction (like clicking to toggle state) and rendering based on props.

## Ticket CS-6
6. Final Testing and Cleanup

    Task: Perform final testing on the entire application, check for and fix any bugs, and clean up the code (e.g., removing console logs, improving code readability).

## Ticket CS-7
7. Stretch goals 

    Task: Add navigation
    Task: Add Theme toggle
    Task: Add form to email the candidate
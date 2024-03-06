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
6. Add ArrowList for the assessment

    Task: Each list should have its own set of upvote arrows (or arrow buttons).
    
    Task: Clicking the "+" button adds a new upvote arrow to the respective list.
    
    Task:All arrows within a list should share the same state, meaning if one arrow is selected, the new ones added should also be in the selected state or reflect the state of existing ones when added.
    
    Task: The component should visually distinguish between the selected and default states of the arrows.
    
    Task: The state of the upvotes should be managed collectively for all ArrowList components, likely using React context or a state management library like Zustand.
    
    Task: The state of the upvotes should persist in the browser so that it's maintained when the page is refreshed.



# Walleye-Capital-Coding-Challenge

## Objective

### 1. Functionality

- [x] Enable users to search for recipes by entering their titles
  - Yup, this is completed. A user can go to the homepage, search using the search bar and hit enter to get a recipe, or recipes, that match that search query.
  - \*One important thing to note, the user can only search by `title` for now. Maybe we will add better searching functionality in the future such as the ability to semantic search
- [x] Display a list of recipes that match the search criteria
  - This is now complete. Users can now see all of the recipes on load and then search for recipes that match the search criteria.
- [x] Include as much details about the recipe as appropriate
  - For now, each recipe shows the title, ingredients, and instructions
- [x] Each recipe should include a title, ingredients list, and cooking instructions
- [x] Allow users to view detailed information by clicking on the recipe title
  - User can now click the recipe from the home page and go to a "recipe" page

### 2. Technology

- [x] Utilize TypeScript and NextJS.
  - I'm only using TypeScript in this project and I'm also using Next14 to build it
- [x] Restrict total development time to 2-3 hours.
  - As of right now, I have about 35 minutes left. The only that is missing is the unit and integration testing. I will try to complete this within the 3 hour time frame!

### 3. Design

- [x] Design a clean and user-friendly UI.
  - I personally think it's pretty good. It optimizes both function and form.
- [x] Implement Shadcn/ui components for UI development.
  - I'm using shadcn/ui as my only UI library, also using lucide-react for icons

### 4. Data Fetching

- [x] Bonus 1: Use TanStack query for efficient data fetching from a server or API.
  - I'm not using react query in the search field, but I am using it in the recipe page to retrieve API data from my server that basically calls OpenAI to get the history of the current recipe!
  - Users will also have the history results cached so that we don't use up API resources

### 5. Integration

- [x] Bonus 2: Integrate OpenAI API to provide additional features like ideas for recipe modifications or other suggestions.
  - I'm using OpenAI's gpt-4 chat model to get the history of the recipe the user is currently looking at.

### 6. Testing

- [ ] Bonus 3: Include tests (unit, integration, and/or end-to-end) for main functionalities.

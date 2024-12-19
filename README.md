# practice-in-public
This is where I maintain the problems and learnings from my Odin projects.

## Library Project
Here's a summary of our debugging journey:

### The Problem
- CSS and JS files weren't loading when using live server (port 8080)
- Interestingly, everything worked in VS Code's "Show Preview" but not on the actual server

### Investigation Steps
1. Checked network tab in dev tools to see file loading status
2. Observed that js and css files were being found (200 status) but not applying
3. Compared behavior between VS Code Preview and live server
4. Examined the URL structure (`http://127.0.0.1:3000/library/`)
5. Reviewed how files were being referenced in the HTML

### What Didn't Work
```html
<link rel="stylesheet" href="styles.css">
<script src="index.js"></script>
```
- Simple relative paths without explicit directory reference
- Using absolute paths with domain (`http://127.0.0.1:3000/...`)

### What Worked
```html
<link rel="stylesheet" href="./styles.css">
<script src="./index.js"></script>
```
- Adding `./` to explicitly reference the current directory

### Learning Points
1. **Path Resolution**: Different environments (VS Code Preview vs. Live Server) can handle relative paths differently
2. **Explicit Paths**: Using `./` makes the file location explicit and more reliable
3. **Debugging Process**: 
   - Check network requests
   - Compare behavior in different environments
   - Look at actual URLs being used
4. **Development Tools**: The same code can behave differently between development tools (VS Code Preview) and actual servers

This is a common issue in web development, and understanding path resolution is crucial for properly structuring web projects!



## Some notes on the Library Project
Here's a summary of what we covered:

1. **Data Attributes in HTML/JS**
   - `data-*` attributes in HTML can store custom data
   - Accessible in JavaScript through `element.dataset.*`
   - Used in this code to connect DOM elements with array indices

2. **Dynamic HTML Generation**
   - HTML can be created through JavaScript for dynamic content
   - Beneficial when content needs to reflect changing data
   - Follows a pattern where:
     - Data is stored in arrays/objects
     - UI is generated from this data
     - User interactions update the data
     - Display automatically updates to match

3. **Code Architecture**
   - Separates concerns into data storage, display logic, and user interactions
   - Maintains consistency between data and UI
   - Makes it easy to modify and maintain the library system

This demonstrates a fundamental pattern in modern web development where the UI is driven by data rather than static HTML.

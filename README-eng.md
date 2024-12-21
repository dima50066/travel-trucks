# Travel Trucks

## Project Description

**Travel Trucks** is a web application for searching, viewing, and booking campervans. Built with modern frontend tools such as React, Redux, TypeScript, and Vite, this project ensures fast and convenient functionality thanks to seamless integration with server APIs and optimized component rendering.

---

## Key Features

- Camper catalog with filtering by type, equipment, and location.
- Camper details view.
- Adding campervans to favorites.
- Booking campervans through an interactive form.
- Support for reviews.

---

## Technologies

This project utilizes the following technologies:

- **React** — for building the user interface.
- **Redux Toolkit** — for state management.
- **React Router** — for routing.
- **Vite** — for fast development and builds.
- **TypeScript** — for static typing.
- **Axios** — for API requests.
- **Styled Components** — for styling components.

---

## Dependencies

Main project dependencies:

- React 18
- Redux Toolkit
- Axios
- React Router DOM
- Styled Components
- TypeScript

Dev dependencies:

- Vite
- ESLint
- TypeScript

---

## Installation and Usage Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-repository/travel-trucks.git
```

### 2. Navigate to the project folder

```bash
cd travel-trucks
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the project in development mode

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/    # All project components
├── pages/         # Application pages
├── redux/         # Redux slices, selectors, operations
├── shared/        # Shared components (buttons, icons, loaders)
├── styles/        # Global styles
├── types.ts       # TypeScript types
└── main.tsx       # Application entry point
```

---

## Key Pages and Components

### **Home Page**

- **Component:** `Home.tsx`
- **Functionality:**
  - Displays a welcome message with the headline "Campers of your dreams."
  - A "View Now" button that navigates to the camper catalog page.
- **Features:** Creates the first impression for the user with an interactive style.

### **Camper Catalog Page**

- **Component:** `CatalogPage.tsx`
- **Functionality:**
  - Displays a list of campervans with the ability to load additional items via the "Load More" button.
  - Integrates with filters (`Filters.tsx`) for dynamic updates to the camper list.
  - Uses `Loader` to indicate the loading process.
- **Features:** Supports pagination and interactive filtering through Redux.

### **Filters**

- **Component:** `Filters.tsx`
- **Functionality:**
  - Allows users to filter campervans by type, equipment, and location.
  - A "Search" button updates the camper list based on selected filters.
- **Features:** Uses Redux to manage filter states.

### **Camper Card**

- **Component:** `CamperCard.tsx`
- **Functionality:**
  - Displays individual campervan information (name, price, rating, location).
  - Allows adding/removing from favorites dynamically.
  - A "Show More" button navigates to the camper details page.
- **Features:** Supports interactivity via Redux and adaptive styling for short and long names.

### **Camper Details Page**

- **Component:** `CamperDetailsPage.tsx`
- **Functionality:**
  - Displays detailed information about a camper: gallery, description, features, reviews.
  - Tabs for switching between "Features" and "Reviews."
  - Loads data via API with Redux.
- **Features:** Uses a loading indicator and handles the "Camper not found" state.

### **Booking Form**

- **Component:** `BookingForm.tsx`
- **Functionality:**
  - Allows users to enter their name, email, select a booking date, and leave a comment.
  - Validates input data using `toast` for notifications.
  - Simulates data submission with a loading state.
- **Features:** Integrates a calendar for date selection using `react-datepicker`.

---

## Technical Structure of Components

- Components are organized by type:
  - **Pages:** `src/pages` (e.g., `Home`, `CatalogPage`, `CamperDetailsPage`).
  - **Unique Components:** `src/components` (e.g., `Filters`, `CamperCard`, `BookingForm`).
  - **Shared Components:** `src/shared` (e.g., `Button`, `Loader`, `Icon`).

---

## State Management

The project uses **Redux Toolkit** for managing global application state. This includes filters, the camper list, favorites, camper details, and asynchronous operations for fetching data.

### **Main Slices:**

#### **1. `filtersSlice`**

- **Purpose:** Manage the catalog filter state.
- **State:**
  - `filters`: Object containing active filters.
  - `page`: Current catalog page.
  - `limit`: Number of items per page.
  - `totalPages`: Total number of pages.
  - `loading`: Loading state (true/false).
  - `error`: Error information (if any).
- **Actions:**
  - `setFilters(filters)`: Sets new filters.
  - `setPage(page)`: Sets the current page.
  - `resetFilters()`: Resets all filters.
  - `setLocation(location)`: Sets the location for filtering.

#### **2. `campersSlice`**

- **Purpose:** Manage camper list, details, and favorites.
- **State:**
  - `items`: Array of campers.
  - `loading`: Loading state.
  - `error`: Error information (if any).
  - `camperDetails`: Detailed information about the selected camper.
  - `favorites`: Array of favorite campers.
  - `currentPage`: Current page.
  - `totalPages`: Total number of pages.
- **Actions:**
  - `toggleFavorite(camperId)`: Adds/removes a camper from favorites.

---

## Asynchronous Operations

The project uses `createAsyncThunk` with Redux Toolkit for API requests.

### **Operations:**

#### 1. `fetchFilteredCampers`

- **Purpose:** Fetches a list of campers based on filters and pagination.
- **Parameters:**
  - `filters`: Active filters.
  - `page`: Page number.
  - `limit`: Number of items per page.
- **Usage:** Sends a request to the server with parameters, and the response updates the camper list in the state.

#### 2. `fetchCamperDetails`

- **Purpose:** Fetches details of a specific camper.
- **Parameters:** Camper ID.
- **Usage:** Triggered when navigating to the camper details page.

---

## Selectors

The project uses selectors for convenient access to data in the state:

### **Camper Selectors:**

- `selectCampers`: Returns the list of campers.
- `selectLoading`: Returns the loading state.
- `selectError`: Returns error information.
- `selectCamperDetails`: Returns details of the selected camper.
- `selectFavorites`: Returns the array of favorite campers.

### **Filter Selectors:**

- `selectFilters`: Returns the active filters object.
- `selectPage`: Returns the current page.
- `selectTotalPages`: Returns the total number of pages.
- `selectFilterLoading`: Returns the loading state of filters.
- `selectLocation`: Returns the selected location.
- `selectLimit`: Returns the limit of items per page.

---

## API

The project interacts with a backend server through **Axios**.

### **Base URL:**

```plaintext
https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
```

### **Endpoints:**

1. `GET /campers` – Retrieves a list of campers with filters and pagination.
2. `GET /campers/:id` – Retrieves details of a specific camper.

---

## Author Information

Author: Dumitru Cuznetov  
Email: dima50066@gmail.com  
GitHub: (https://github.com/dima50066)

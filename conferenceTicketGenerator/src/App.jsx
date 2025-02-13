import { RouterProvider, createBrowserRouter } from "react-router-dom";

import TicketSelection from "./pages/TicketSelection";
import AttendeeDetails from "./pages/AttendeeDetails";
import TicketReadypage from "./pages/TicketReady";
import { TicketProvider } from "./context/TicketContext";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <TicketSelection /> },
      { path: "/AttendeeDetails", element: <AttendeeDetails /> },
      { path: "/TicketReady", element: <TicketReadypage /> },
    ],
  },
]);

function App() {
  return (
    <TicketProvider>
      <RouterProvider router={router} />
    </TicketProvider>
  );
}
export default App;

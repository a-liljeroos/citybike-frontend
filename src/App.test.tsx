import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

test("full app rendering/navigating", async () => {
  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  );

  expect(
    screen.getByText(
      /This is a website where you can browse Helsinki CityBike data/i
    )
  ).toBeInTheDocument();

  userEvent.click(screen.getByText(/Journeys/i));
  expect(document.querySelector(".spinner")).toBeInTheDocument();
  await screen.findByText(/journeys in the database/i);
  expect(document.querySelector(".journey-card")).toBeInTheDocument();
  userEvent.click(screen.getByText(/Stations/i));
  expect(document.querySelector(".spinner")).toBeInTheDocument();
  await screen.findByTestId("stations-list");
  expect(document.querySelector(".go-up-btn")).toBeInTheDocument();
});

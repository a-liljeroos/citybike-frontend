import {
  renderHook,
  waitFor,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { QueryClientWrapper } from "./mocks/testQueryClient";
import StationList from "./components/Stations/StationList";

describe("StationList", () => {
  it("displays the fetched data", async () => {
    render(
      <QueryClientWrapper>
        <StationList />
      </QueryClientWrapper>
    );
    await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));

    expect(
      screen.getByText("10 stations in the database.")
    ).toBeInTheDocument();
    expect(screen.getByText("Malminkartanonhuippu")).toBeInTheDocument();
    expect(screen.getByText("Hankasuontie")).toBeInTheDocument();
  });
});

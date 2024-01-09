import { toast } from "react-hot-toast";

class Toaster {
  public unauthorized(): void {
    toast.error(`You are not authorized to view this page.`);
  }

  public noService(): void {
    toast.error(`Service Unavailable.`);
  }

  public noData(dataName?: string): void {
    toast.error(`Could not fetch${" " + dataName} data.`);
  }

  public loginSuccess(): void {
    toast.success(`Logged in successfully.`);
  }

  public logoutSuccess(): void {
    toast.success("Logged out successfully.");
  }

  public loginRequired(): void {
    toast.error(`Please login.`);
  }

  public loginFailed(): void {
    toast.error("Ops.. Error on login. Try again!");
  }
}

export const toasterMsg = new Toaster();

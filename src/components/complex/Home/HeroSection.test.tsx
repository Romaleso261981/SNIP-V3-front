import { render, screen } from "@testing-library/react";
import HeroSection from "./Hero";
import { StrapiImage } from "@/types/apiStrapiTypes";

describe("HeroSection", () => {
  const mockData = {
    title: "Вплети традицію у свій інтер'єр!",
    video: {
      url: "/test-image.jpg",
    } as StrapiImage,
  };

  it("renders the title text", () => {
    render(<HeroSection title={mockData.title} video={mockData.video} />);
    expect(
      screen.getByText("Вплети традицію у свій інтер'єр!")
    ).toBeInTheDocument();
  });
});

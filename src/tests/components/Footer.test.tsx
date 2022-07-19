import { render } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import Footer from "../../components/sbComponents/Common/Footer";
import { footerMock } from "../mock/footerMock";

describe("Storyblok Footer component testing", () => {
  const mockTitle = footerMock.linkTitle;
  const mockAlt = footerMock.iconAlt;

  test("Component renders on screen with the right title", () => {
    const { getByText, unmount } = render(<Footer blok={footerMock} />);
    expect(getByText(mockTitle).textContent).toBe(mockTitle);
    unmount();
  });

  test("Component renders with the correct alt and src properties", () => {
    const { getByAltText, unmount } = render(<Footer blok={footerMock} />);

    const mockSrc = footerMock.iconSrc.filename;
    const imageElement = getByAltText(mockAlt);

    expect(imageElement).toHaveProperty("src", mockSrc);
    expect(imageElement).toHaveProperty("alt", mockAlt);
    unmount();
  });

  test("Component renders with an <img/> tag", () => {
    const { getByAltText, unmount } = render(<Footer blok={footerMock} />);
    expect(getByAltText(mockAlt)).toBeInstanceOf(HTMLImageElement);
    unmount();
  });
});

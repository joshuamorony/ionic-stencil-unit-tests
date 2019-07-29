import { AppDetail } from "./app-detail";
import { ItemService } from "../../services/items";
import { newSpecPage } from "@stencil/core/testing";

describe("app", () => {
  it("builds", () => {
    expect(new AppDetail()).toBeTruthy();
  });

  describe("item detail fetching", () => {
    it("has an itemId prop", async () => {
      // Arrange
      const page = await newSpecPage({
        components: [AppDetail],
        html: `<div></div>`
      });

      let component = page.doc.createElement("app-detail");

      // Act
      (component as any).itemId = 3;
      page.root.appendChild(component);
      await page.waitForChanges();

      // Assert
      expect(page.rootInstance.itemId).toBe(3);
    });

    it("calls the getItem method of ItemService with the supplied id", async () => {
      // Arrange
      ItemService.getItem = jest.fn();

      const page = await newSpecPage({
        components: [AppDetail],
        html: `<div></div>`
      });

      let component = page.doc.createElement("app-detail");

      // Act
      (component as any).itemId = 5;
      page.root.appendChild(component);
      await page.waitForChanges();

      // Assert
      expect(ItemService.getItem).toHaveBeenCalledWith(5);
    });
  });
});

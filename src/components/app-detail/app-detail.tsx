import { Component, Prop, h } from "@stencil/core";
import { ItemService } from "../../services/items";

@Component({
  tag: "app-detail",
  styleUrl: "app-detail.css"
})
export class AppDetail {
  @Prop() itemId: number;

  async componentDidLoad() {
    console.log(await ItemService.getItem(this.itemId));
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Detail</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding" />
    ];
  }
}

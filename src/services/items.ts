class ItemServiceController {
  constructor() {}

  async getItem(id: number) {
    return { id: id };
  }
}

export const ItemService = new ItemServiceController();

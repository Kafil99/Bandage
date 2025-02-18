export interface Product {
    _id: string;
    _type: "product";
    title: string;
    productImage?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    price: number;
    description: string;
    inventory: number;
    quantity: number;
    tags?: string[];
    discountPercentage?: number;
    isNew?: boolean;
    slug : {
        _type : "slug",
        current : string
    };
  }
import { client } from '@/sanity/lib/client';
import groq from 'groq';
import { notFound } from 'next/navigation';
import ProductDetails from '@/app/components/ProductDetail';

// Fetch product details using the _id value.
const productDetails = async (id: string) => {
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0] {
     _id,
     title,
     productImage,
     price,
     description,
     inventory,
     quantity,
     tags,
     discountPercentage,
     isNew
    }`,
    { id }
  );

  console.log("Fetched Product:", product); // Debugging line
  return product || null;
}

// Pre-generate static params (ensuring the id is a string literal)
export async function generateStaticParams() {
  const query = groq`*[_type == "product"]{ _id }`;
  const products: { _id: string }[] = await client.fetch(query);
  return products
    .filter((product) => typeof product._id === 'string' && product._id.length > 0)
    .map((product) => ({ id: product._id })); // Using _id instead of slug
}

// Details page component
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await productDetails(params.id); // Pass only the ID
  if (!product) return notFound();

  // Ensure quantity and inventory are numbers
  if (typeof product.quantity === 'string') product.quantity = parseInt(product.quantity, 10);
  if (typeof product.inventory === 'string') product.inventory = parseInt(product.inventory, 10);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <ProductDetails product={product} /> {/* Pass product data to the client component */}
      </div>
    </>
  );
}
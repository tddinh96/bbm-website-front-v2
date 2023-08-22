// // import getBillboard from "@/actions/get-billboard";
// // import getProducts from "@/actions/get-products";
// // import ProductList from "@/components/product-list";
// // import Billboard from "@/components/ui/billboard";
// // import Container from "@/components/ui/container";

// // export const revalidate = 0;

// // const HomePage = async () => {
// //   const products = await getProducts({ isFeatured: true });
// //   const billboard = await getBillboard("d90af64f-6ae6-465b-a912-9d9fd0f34742");

// //   return (
// //     <Container>
// //       <div className="space-y-10 pb-10">
// //         <Billboard 
// //           data={billboard}
// //         />
// //         <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
// //           <ProductList title="Featured Products" items={products} />
// //         </div>
// //       </div>
// //     </Container>
// //   )
// // };

// // export default HomePage;

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import getHomepageFeatures from "@/actions/get-homepage-features";
import HomepageFeatureList from "@/components/homepage-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true})
    //Get billboard id here
    const billboard = await getBillboard("d90af64f-6ae6-465b-a912-9d9fd0f34742");
    const features = await getHomepageFeatures("")

    return (
        <Container>
            <div className="space-y-10 pb-10">
            <Billboard data={billboard} />
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items ={products} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">BBM Features
                <HomepageFeatureList title="Features" items={features} content={features} />
            </div>
            </div>
        </Container>
     );
}

export default HomePage;
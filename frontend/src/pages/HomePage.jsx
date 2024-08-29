import { Container, SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();
	const textColor = useColorModeValue("gray.900", "gray.100");

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-l, pink.400, red.500)"}
					bgClip={"text"}
					textAlign={"center"}
					textTransform={"uppercase"}
				>
					Current Products 🚀
				</Text>

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>
				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color={textColor}>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='red.600' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>{" "}
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	);
};

export default HomePage;

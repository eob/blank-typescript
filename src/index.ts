import { foo } from "./lib/info";

async function main() {
	foo();
	console.log("foo");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

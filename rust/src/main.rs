use std::env;
use std::process::Command;

fn main() {
	let args: Vec<String> = env::args().collect();

	println!("Building...");

	let output = Command::new("rustc")
		.arg(format!("{}/main.rs", args[1]))
		.arg("--out-dir")
		.arg("temp")
		.output()
		.expect("Failed to build");

	println!("{}", String::from_utf8(output.stdout).unwrap());

	println!("Copying input to temp directory...");

	let output2 = Command::new("cp")
		.arg(format!("{}/input.txt", args[1]))
		.arg("temp/input.txt")
		.output()
		.expect("Failed to copy input");

	println!("{}", String::from_utf8(output2.stdout).unwrap());

	println!("Running...");

	let output3 = Command::new("./temp/main")
		.output()
		.expect("Failed to run output");

	println!("{}", String::from_utf8(output3.stdout).unwrap());
}
use std::env;
use std::process::Command;

fn main() {
	let args: Vec<String> = env::args().collect();

	Command::new("rm")
		.arg("-rf")
		.arg("temp")
		.output()
		.expect("Failed to empty temp directory");

	Command::new("mkdir")
		.arg("temp")
		.output()
		.expect("Failed to create temp directory");

	let output = Command::new("rustc")
		.arg(format!("{}/main.rs", args[1]))
		.arg("--out-dir")
		.arg("temp")
		.output()
		.expect("Failed to build");

	println!("{}", String::from_utf8(output.stderr).unwrap());
	println!("{}", String::from_utf8(output.stdout).unwrap());

	Command::new("cp")
		.arg(format!("{}/input.txt", args[1]))
		.arg("temp/input.txt")
		.output()
		.expect("Failed to copy input");

	let output2 = Command::new("./temp/main")
		.output()
		.expect("Failed to run output");

	println!("{}", String::from_utf8(output2.stderr).unwrap());
	println!("{}", String::from_utf8(output2.stdout).unwrap());
}
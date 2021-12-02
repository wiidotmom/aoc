use std::fs;

fn main() {
	let contents = fs::read_to_string("./temp/input.txt").unwrap();

	fn find_solution_one(input: &str) -> i32 {
		let lines = input.split('\n');
		let mut inc: i32 = 0;
		let mut previous: i32 = 0;

		for line in lines {
			let num = line.parse::<i32>().unwrap();
			if num > previous && previous != 0 {
				inc = inc + 1;
			}
			previous = num;
		}

		return inc;
	}

	fn find_solution_two(input: &str) -> i32 {
		let mut lines: Vec<&str> = input.split('\n').collect();
		
		let mut inc: i32 = 0;
		let mut window: Vec<i32> = vec![];
		let mut previous_sum: i32 = -1;

		lines = lines.split_off(2);

		for line in lines {
			if window.len() == 3 {
				window = window.split_off(1);
			}

			window.push(line.parse::<i32>().unwrap());

			let mut sum: i32 = 0;
			for window_val in &window {
				sum = sum + window_val;
			}

			if sum > previous_sum && previous_sum != -1 {
				inc = inc + 1;
			}

			previous_sum = sum;
		}

		return inc;
	}

	println!("Solution 1: {}", find_solution_one(contents.as_str()));
	println!("Solution 2: {:?}", find_solution_two(contents.as_str()));
}
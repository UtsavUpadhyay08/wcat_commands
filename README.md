# w-cat Commands Executor

This project is a command-line tool that executes various commands similar to the `cat` command but with additional functionalities such as line numbering, filtering empty lines, and converting multiple lines into single lines.

## Features

- **Line numbering (-n):** Adds numbers to each line of the specified file(s).
- **Non-empty line numbering (-b):** Adds numbers to each non-empty line of the specified file(s).
- **Single line conversion (-s):** Converts multiple lines into a single line.

## Usage


### Options

- `-n`: Line numbering.
- `-b`: Non-empty line numbering.
- `-s`: Single line conversion.

### Examples

- Line numbering: `w-c-at -n filename1 filename2`
- Non-empty line numbering: `w-c-at -b filename1 filename2`
- Single line conversion: `w-c-at -s filename1 filename2`

### Redirecting Output

- `>`: Writes output to a file.
  - Example: `w-c-at -n filename1 > filename2`

- `>>`: Appends output to a file.
  - Example: `w-c-at -n filename1 >> filename2`

## Installation

1. Clone the repository: `git clone https://github.com/your_username/w-cat.git`
2. Navigate to the project directory: `cd w-cat`
3. Run the installation script: `./install.sh`


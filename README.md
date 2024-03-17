# w-cat Commands Executor

This project is a command-line tool that executes various commands similar to the `cat` command but with additional functionalities such as line numbering, filtering empty lines, and converting multiple lines into single lines.

## Features

- **Line numbering (-n):** Adds numbers to each line of the specified file(s).
- **Non-empty line numbering (-b):** Adds numbers to each non-empty line of the specified file(s).
- **Single line conversion (-s):** Converts multiple lines into a single line.
- **Multiple Commands(e.g., -n -s):** Multiple commands could be applied together except for -n and -b as their operations clash.

## Usage


### Options

- `-n`: Line numbering.
- `-b`: Non-empty line numbering.
- `-s`: Single line conversion.

### Examples

- Line numbering: `w-c-at -n filename1 filename2 filename3 ...`
- Non-empty line numbering: `w-c-at -b filename1 filename2 filename3 ...`
- Single line conversion: `w-c-at -s filename1 filename2 filename3 ...`

### Redirecting Output

- `>`: Writes output of commands to a file.
  - Example: `w-c-at -n filename1 > filename2`

- `>>`: Appends output of commands to a file.
  - Example: `w-c-at -n filename1 >> filename2`


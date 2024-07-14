---
title: Python and the Terminal
description:
date: 2024-07-14 07:15:31 +0000
---

## Terminal Basics

The terminal can be intimidating, but it's just a text-based way to interact with your system.
You do this all the time graphically. You run programs, navigate folders, and open files using
the mouse. You can do this all from the terminal too, but using your keyboard instead.

Here are the commands you'll need to know for basic Python programming:

- `pwd` - "print working directory" which is nerd speak for "show me the current folder I'm in" 
- `cd` - "change directory", in other words, "change into a different folder".
- `ls` - "List", or "List the files and folders in the current folder I'm in"

> The terms "folder" and "directory" can usually be used interchangeably, but the Linux crowd prefers directory

## Python in the Terminal

To use Python from the terminal, we need one more command:

- `python` - runs the _Python Interpreter_ program

Typing `python` into the terminal should show the following:

```sh
$ python
Python 3.12.3 (...) [...] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

> If your system shows Python 2.7, try running `python3` instead. Your system
probably has both Python 2 and Python 3 installed.

The `>>>` is a prompt. The Python interpreter is waiting for you to write some
Python code. For example, type `print("Hello, world")` and hit enter. You should
see the message displayed and right afterwards, the prompt `>>>` appears again to
wait for the next line of code.

Using the interpreter this way is great to debug or to see how some lines of code
behave. However, this isn't usually how Python programs are ran, let's try running
code from a file with Python code.

Type `exit()` to close the Python interpreter, then open up your text editor
and add the following:

```python
print("Hello from a Python file!")
```

Save that file somewhere as `hello.py`. Great! Now, how do we run it?
We're going to have to get the Python Interpreter to read and _interpret_ the code in the file (AKA run the code!).
So how do we get the interpreter to do that?

First, lets find the file you just saved:

```sh
cd folder/where/you/saved/the/code
ls
```

You should see your file `hello.py` after you run the `ls` command.

> If you don't, you're in the wrong folder. Use `pwd` to tell you which folder you're in.
Also make sure you saved the file in a folder and you know where the folder is located.

Now that you're in the same folder as your file, we can call the Python interpreter!
To get the interpreter to read your file, use the `python` command with the file as an argument:

```sh
python hello.py
```

Hit enter, and you should see the terminal display "Hello from a Python file!".
Congratulations! You just ran your first program! Now you have everything you need
to start coding in Python!

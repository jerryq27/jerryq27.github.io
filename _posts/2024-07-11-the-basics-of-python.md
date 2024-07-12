---
title: The Basics of Python
description: A simple overview for my friends who've shown interest in learning Python.
date: 2024-07-11 05:48:21 +0000
---

## Prerequisites

Here's everything you need to get started coding in Python on Linux

- a text editor - to write your programs in
- a terminal - to run your programs

## Using the terminal

Don't let the terminal scare you, it's just a text-based way to interact with your system.
You do this all the time graphically.

Here are the basic commands you'll need to know for this guide:

- `pwd` - "print working directory" which is nerd speak for "show me the current folder I'm in" 
- `cd` - Stands for "change directory", in other words, "change into a different folder".
- `ls` - "List", or "List the files and folders in the current folder I'm in"
- `python` - run the Python interpreter

> The terms "folder" and "directory" can usually be used interchangeably, but the Linux crowd prefers directory

## Your first program

Open up your text editor and add the following:

```python
print("Hello, world!")
```

Save that file somewhere as `my_first_program.py`. Great! Now, how do we run it?
We're going to have to get the _Python Interpreter_ to read the file and run the program (_interpret_ the code!).
So how do we get the Python Interpreter to do that?

With the terminal! First, lets find the file you just saved:

```sh
cd folder/where/you/saved/the/code
ls
```

You should see your file `my_first_program.py` after you run the `ls` command.

> If you don't, you're in the wrong folder. Use `pwd` to tell you which folder you're in.
Also make sure you did save the file in a folder and you know where it's located.

Now that you're in the same folder as your file, we can call the Python interpreter!
To get the interpreter to read your file, use the `python` command:

```sh
python my_first_program.py
```

Hit enter, and you should see the terminal display "Hello, world!".
Congratulations! You just ran your first Python program!

## Coding in Python

Now that you know how to run your Python code, time to learn the basics
of the language itself. A good base would be to learn about

- Variables
- Data Types
- Conditionals
- Loops

### Variables

In any programming language, you deal with a lot of data. You process data, and manipulate it
with your code. To make this easier, we need a way to store and identify data, and that's
where variables come in. Consider the following code:

```python
my_num = 5
print(my_num)
```

If you run this program, what would show up in the terminal?
Try it out and see if you guessed correctly!

So why did the terminal display `5` instead of something like `my_num`?
Because `my_num` is a _variable_ that we declared to store the value `5`.
We stored that data into a variable and named it. Now we can use the variable
name to refer to the value `5`!

Simple enough concept, right? Another thing to keep in mind is to use meaningful
variable names when you store data. Consider the following code:

```python
n = 100

print(n)
```

We created a variable called `n` and stored `100` in it. But what does this data represent?
The name `n` isn't very helpful in determining what this number represents. Is it a dollar
amount? A weight measurement? Let's update the code:

```python
test_score = 100

print(test_score)
```

Now this code is more obvious! We know exactly what `100` means because we used the meaningful
variable name `test_score`! It may not seem terribly important now, but creating meaningful variable names
will make your code easier to read, understand, and debug.

### Data Types

Numbers aren't the only data type you will work with in Python. There are 4 basic data types:

- Numbers - as you may have guessed, are whole numbers
- Floats - these are decimal numbers
- Strings - text data, a "string" of characters
- Booleans - can only be two values, true and false

Here are some examples:

```python
my_favorite_number = 7

pi = 3.14

name = "Jerry"

is_my_favorite_number_even = False
```

Some people have trouble with the string data type.
Consider the following code:

```python
num1 = 5
num2 = "10"

print(num1 + num2)
```

What do you think you will get? Try it out and see if you're correct!

If you're confused why you got an error, that's because you're trying to
do math between a number and a string. Math can only be done between numbers,
and in Python, the value `5` is not equal to `"5"` because `5` is a numerical
value, and `"5"` is just a piece of text.

---
title: The Basics of Python
description: A simple overview for my friends who've shown interest in learning Python.
date: 2024-07-11 05:48:21 +0000
---
# Python Project I 


Write a program that takes the following [file](old/README.md.old) full of codes and
convert it to ASCII. 

## Prerequisites

Here's everything you need to get started coding in Python on Linux

- a text editor - to write your programs in
- a terminal - to run your programs

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
- Booleans - can only be one of two values, True or False

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

> Math between number values can be done with `+` for addition, `-` for
subtraction, `*` for multiplication, `/` for division, and `%` for division
when you want the _remainder_.

## Conditional

Sometimes when writing code, you want run code under certain conditions,
and other code for when those conditions aren't met. This is where
conditionals come in:

```python
my_number = 5

if my_number % 2 == 0:
  print("The number is even")
else:
  print("The number is odd")
```

Notice a couple things here:

1. We are using the equality operator `==` to compare the result of `my_number % 2` and `0`
1. The equality operator `==` is different from the assignment operator `=`
  - `=` assigns a value to a variable
  - `==` checks if two values are equal and returns a boolean (True or False)

Other operators you can use in conditionals are:

- `<` - less than
- `>` - greater than
- `<=` - less than or equal to
- `>=` - greater than or equal to
- `==` - equal to
- `!=` - not equal to

There are other times when you may want your code to have multiple conditions. That's
where the logical operators `and` and `or` come in:

```python
test_score = 94

if test_score <= 100 and test_score >= 92:
  print("A")
elif test_score <= 91 and test_score >= 82:
  print("B")
elif test_score <= 81 and test_score >= 72:
  print("C")
elif test_score <= 71 and test_score >= 65:
  print("D")
else:
  print("F")
```

Remember that these expressions just return a boolean (True or False).
Here's a simple comparison list of boolean values with the logical operators:

- True and True = True
- True and False = False
- False and True = False
- False and False = False
- True or True = True
- True or False = True
- False or True = True
- False or False = False

## Loops

To better understand a loop, let's first introduce a data structure, a list.
Let's say you want to create a program to display a list of errands. You may think
to write:

```python
errand_1 = "Take out the trash"
errand_2 = "Wash the dishes"
errand_3 = "Clean your room"
...
errand_20 = "Meal prep"
```

This would would make your code difficult to work with. It's time consuming to write,
and it's creating too many unnecessary variables. This is where a list comes in handy.
Lists can be defined in Python using the `[]` braces:

```python
errands = [
  "Take out the trash",
  "Wash the dishes",
  "clean your room,
  ...
  "Meal prep",
]
```

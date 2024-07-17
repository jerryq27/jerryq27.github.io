---
title: "Project I: Python Basics"
description: A simple overview for my friends who've shown interest in learning Python.
date: 2024-07-11 05:48:21 +0000
---
## Concepts

To finish this project, you'll have to be familiar with 4 concepts

1. Variables
1. Data Types
1. Conditionals
1. Basic I/O

> In these posts, you may see lines of code starting with a `#`. This is known
as a _comment_. The Python Interpreter will ignore everyting that comes after `#`. So it's
a great place to add small notes.
{: .prompt-info }

## Variables

In any programming language, you deal with a lot of data. You process data, and manipulate it
with your code. To make this easier, we need a way to store and identify data, and that's
where variables come in. Variables are essentially labeled containers for data.
Consider the following code:

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

## Data Types

Numbers aren't the only data type you will work with in Python. Here are 4 basic data types:

- Integers - these are whole numbers
- Floats - these are decimal numbers
- Strings - text data, a "string" of characters
- Booleans - can only be one of two values, `True` or `False`

Here are some examples:

```python
# Number
my_favorite_number = 7

# Float
pi = 3.14

# String
name = "Jerry"

# Boolean
is_my_favorite_number_odd = True
```

You can do some math between numbers using these operators:

- `+` - for addition
- `-` - for subtraction
- `*` - for multiplication
- `/` - for division
- `%` - for division where you want the _remainder_ instead

Examples:

```python
num1 = 5
num2 = 2

print(num1 + num2) # 7
print(num1 - num2) # 3
print(num1 * num2) # 10
print(num1 / num2) # 2
print(num1 % num2) # 1

# Math can also be done between Integers and Floats
num3 = 3.14
print(num1 + num2 + num3) # 10.14
```

When it comes to Strings, there might be some confusion
with how it behaves with numbers.
Consider the following code:

```python
num1 = 5
num2 = "5"

print(num1 + num2)
```

What do you think you will get? Try it out and see if you're correct!

If you're confused why you got an error, that's because you're trying to
do math between an Integer and a String. Math can only be done between numbers,
and in Python, the value `5` is not equal to `"5"` because `5` is a numerical
value, and `"5"` is just a piece of text.

Let's dive a bit further into why that is. Computers can only understand numbers.
So with computers, everything (and I mean everything) is a number under the surface.
It's the same with text. Each character has a numerical value associated with it.
The computer uses that number to determine which letter to display. For example:

- "A" = 65
- "a" = 97

So how does the computer know that 65 should display "A"? The surface level explanation is
that the computer was designed to follow the [ASCII](https://www.asciitable.com/) standard
when displaying text.

> The `Dec` and `Chr` columns are the ones to pay attention to on the ASCII
table to determine what number is associated with which character.
{: .prompt-info }

Knowing all this, it wouldn't make sense to compare the numerical value `5` with the
character `"5"` (whose numerical value is 53). They are different data types, and definitely
different numbers under the surface. 

If you're curious to see what character a number represents or vice-versa, you can use
the following functions:

```python
character = chr(97)
print(character)  # 'a'

number_code = ord('a')
print(number_code) # 97
```

> Technically, modern computer systems are using UTF-8 (thank goodness for that). However ASCII is
a great example to introduce the concept of character encoding, and UTF-8 is compatible with ASCII.
{: .prompt-info }

## Conditionals

Sometimes we want certain code to run if conditions are met, otherwise, run some other code.

For example:

```python
food = "eggs"

print("It's not vegan")
print("It's vegan")
```

This program would display both "It's vegan" and "It's not vegan". But that's not what we want.
This is where conditional statements are really useful, here is how it's structured:

```python
if condition:
  # Run some code
elif another_condition:
  # Run some other code
else:
  # Run this code if no condition was met
```

It might look a bit intimidating, but it's easier if you read it out loud. "If `condition` run this code.
Else if (elif) `some_other_condition` run this other code. Else run this code."

So what are these conditions and how do we create them? Technically, they are just Booleans!
We can create them using the comparison operators:

- `<` - is less than
- `>` - is greater than
- `<=` - is less than or equal to
- `>=` - is greater than or equal to
- `==` - is equal to
- `!=` - is not equal to

Using these operators, we can compare two values to return a Boolean. Let's rewrite the previous code:

```python
food = "eggs"

if food == "eggs":
  print("It's not vegan")
else:
  print("It's vegan")
```

This program will now just print "It's not vegan" since `food == "eggs"` evaluated to `True`. Updating food to
a different value would print "It's vegan":

```python
food = "mushrooms"

if food == "eggs":
  print("It's not vegan")
else:
  print("It's vegan")
```

> Don't confuse the comparison operator `==` with the assignment operator `=`. The assignment operator stores a value
to a variable. The comparison operator compares two values and returns a Boolean.
{: .prompt-info }

## Basic Input and Output

Good thing about basic input and output is that you've already been using basic output throughout these lessons!
When you display something on the screen with `print()` your program is _outputting_ something to the screen.

What if we want our program to receive some input? We can do that with the `input()` function!

```python
name = input("What is your name? ")

print(name)
```

Notice when you run your program, it hangs after displaying "What is your name?". That is because the program is
waiting for some input. Type in your name and hit enter, you will then see the line `print(name)` run and display
your name. However, showing a user their name without anything else doesn't seem friendly at all. This is a good time
to introduce _String Concatenation_! It's just a fancy phrase to say we're combining Strings together. We do this by
using the `+` operator on Strings.

```python
first_name = "Killua"
last_name = "Zoldyck"

full_name = first_name + " " + last_name

print(full_name) # Killua Zoldyck
```

So now we can rewrite our original program to be a bit more user friendly:

```python
name = input("What is your name? ")

print("Hello " + name + "! Nice to meet you!")
```

Let's try a different example, and see if we can do some math with user input:

```python
num1 = input("Enter the first number: ") # 2
num2 = input("Enter the second number: ") # 3

sum = num1 + num2
print("The sum is " + sum + "!") # 23
```

So the code ran with no errors, but there's a weird bug!
The code said "The sum is 23!", but 2 + 3 is 5, not 23!
So what happened?

The `input()` function returns the user's input as a String.
So when we used the `+` operator, it didn't perform an addition
since the two values weren't numbers. Since they are Strings,
it combined the characters `"2"` and `"3"` into a single String `"23"`.

> This situation where a program can run without the interpreter displaying an error,
but still has incorrect results is known as a _Logical Error_.
{: .prompt-info }

So how to we deal with this? We have String numbers, but we want Integer
numbers to do some math. Well, we have to _cast_ the String into an Integer.
Casting is essentially converting one data type into another. Here are some
casting functions:

- `int()` - converts value into an Integer
- `str()` - converts value into a String
- `float()` - converts value into a Float

Let's rewrite our program to use the `int()` function to cast our String into Integers:

```python
num1 = input("Enter the first number: ") # 2
num2 = input("Enter the second number: ") # 3

sum = int(num1) + int(num2)
print("The sum is " + sum + "!")
```

Great! Our inputs are now Integers and the `+` operator should perform an addition instead
of a string concatenation, correct? Try running your program now.

...so why did we get an error? Didn't we just fix our program by casting the input into Integers?
Yes, but we missed a small detail. When we run the code `print("The sum is " + sum + "!")`, we
are essentially doing a `print(String + Integer + String)`, so the program doesn't know what to
do, should it perform addition with `+`? Can't with two Strings! Should it concatenate the Strings?
Can't because of an Integer!

But that line of code didn't show an error before and displayed "23" with no issues! Why's that? 
Because `sum` is the result of an addition between two Integers, that means it is also an Integer itself.
In our initial code (before the casting), `sum` was the result of a concatenation between two Strings,
so it was a String itself. The code didn't crash and throw an error since the code that ran in that
scenario was `print(String + String + String)`.

So to fix this, we must cast the Integer `sum` into a String!

```python
num1 = input("Enter the first number: ") # 2
num2 = input("Enter the second number: ") # 3

sum = int(num1) + int(num2)
print("The sum is " + str(sum) + "!") # 5
```

> That was quite a few "gotchas"! But it is important to understand how these data types
interact with one another and how the computer sees that data. Finance software would be
full of bugs if 2 + 3 resulted in 23!
{: .prompt-info }

## Project: Chinese Zodiac

Write a program that asks the user to input a year. The year must be a value between
1924 and 2024 (inclusive). The program should then use the year to determine what their Chinese Zodiac
animal is.

The formula to calculate the Chinese Zodiac is to subtract 4 from
the year, divide by 12 and note the remainder. That value will
determine the animal based on this chart:

- 0 = Rat
- 1 = Ox
- 2 = Tiger
- 3 = Rabbit
- 4 = Dragon
- 5 = Snake
- 6 = Horse
- 7 = Goat
- 8 = Monkey
- 9 = Rooster
- 10 = Dog
- 11 = Pig

> **Hint:** You can stop a program by using the `exit()` function. 
{: .prompt-tip }

Sample runs:

```
Enter a year: 1955
Your Zodiac animal is: Goat

Enter a year: 2007
Your Zodiac animal is: Pig

Enter a year: 1764
1764 is not a valid year.
```


## Project

Write a program that takes the following [file](old/README.md.old) full of codes and
convert it to ASCII. 



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

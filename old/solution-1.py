user_input = input("Enter a year: ")
year = int(user_input)

result = (year - 4) % 12

zodiacs = {
    0: "Rat",
    1: "Ox",
    2: "Tiger",
    3: "Rabbit",
    4: "Dragon",
    5: "Snake",
    6: "Horse",
    7: "Goat",
    8: "Monkey",
    9: "Rooster",
    10: "Dog",
    11: "Pig",
}

print("Your Zodiac animal is: " + zodiacs[result])

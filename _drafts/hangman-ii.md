---
layout: post
title: Hangman II
date: 2019-07-01 22:43:22
categories: development mobile flutter
thumbnail: gamepad
---

[Part 1]

Adding a drop down of selectable letters presented some challenges.
Layouts in Flutter are different from Android layouts. Instead of a
LinearLayout, I had to use a Column widget. That wasn't too bad, but
getting things to display how I wanted them took some studying with
the good old docs.

Instead of Spinner, there is a widget called DropdownButton.
DropdownButtons take a bunch of DropdownMenuItems to create
a dropdown list. Makes sense, and sounds perfect for this
situation.

So here's my implmentation:

```dart
class GameState extends State<Game> {

  List<String> _alphabet = [
    'Please select a letter',
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z',
  ];
  List<DropdownMenuItem<String>> _list;

  String _initialValue = 'Please select a letter';

  @override
  Widget build(BuildContext context) {
    _list = new List();
    for(String letter in _alphabet) {
      _list.add(new DropdownMenuItem(
        value: letter,
        child: Center(child:new Text(letter)),
      ));
    }

    return SafeArea(
      child: Column(
        children: <Widget>[
          Expanded(
            child: CustomPaint(
              painter: HangmanPainter(),
              // Gets drawn after the Painter.
              child: Center(),//Center(child: Text('canvas')),
            ),
          ),

          Container(
            child: DropdownButton<String>(
              value: _initialValue,
              onChanged: (String newValue) {},
              items: _list,
            ),
          ),
        ],
      ),
    );
  }
}
```

<img src="{{ site.images }}/hangman-stage-2.png" alt="Hangman Stage 2" width="500" height="850">

It's looking good! I wanted to add one more thing before I finish today's programming
session. Let's add some text that gets updated with values selected. Just needs a couple
things, a string accumulator that updates when a value is selected and a new child in the column!

```dart
class GameState extends State<Game> {

  List<String> _alphabet = [
    'Please select a letter',
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z',
  ];
  List<DropdownMenuItem<String>> _list;

  String _initialValue = 'Please select a letter';
  String selectedLetters = ''; // Accumulator!

  @override
  Widget build(BuildContext context) {

    _list = new List();
    for(String letter in _alphabet) {
      _list.add(new DropdownMenuItem(
        value: letter,
        child: Center(child:new Text(letter)),
      ));
    }

    // TODO: implement build
    return SafeArea(
      child: Column(
        // New child!
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Center(
              child: new Text(selectedLetters),
            ),
          ),

          Expanded(
            child: CustomPaint(
              painter: HangmanPainter(),
              // Gets drawn after the Painter.
              child: Center(),//Center(child: Text('canvas')),
            ),
          ),

          Container(
            child: DropdownButton<String>(
              value: _initialValue,
              onChanged: (String newValue) {
                setState(() {
                  // Update accumulator!  
                  selectedLetters += '$newValue ';
                });
              },
              items: _list,
            ),
          ),
        ],
      ),
    );
  }
}
```

<img src="{{ site.images }}/demo-1.gif" alt="Demo 1" width="500" height="850">

I'm liking how this is coming out! Well, it wasn't entirely a successful..
I didn't figure out how to update the list when an item is selected.
I tried to remove the letters from the letters in the `onChanged` callback with:

```dart
_list.removeWhere((menuItem) => menuItem.value == newValue);

// I also tried this.
_list.removeAt(_alphabet.indexOf(newValue));
```

They weren't updating the widget as I hoped. Preferably I would like to
disable the menu items. Maybe I can look into this more, nonetheless I think
this was good progress!

Learned a few things too:

* Expanded widgets take up all available space.
* SafeArea makes sure the content is not underneath the status bar.
* Dart string literals are awesome!!

\- Jerry

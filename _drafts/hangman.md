---
layout: post
title: Hangman
date: 2019-06-26 17:20:45
categories: development mobile flutter
thumbnail: gamepad
---

In a [recent post], I went a little overboard when found out about Flutter.
Maybe before I go rewriting my current project, I should make a simple Flutter
application.

So let's try making a Hangman game! Not too diffcicult of an app to make, and it will give me an
idea on how it's like developing with Flutter. So, let's see if I can finish this within a week.

The app itself just needs 3 things to be playable:

1. A canvas that draws the pieces of the hangman for every wrong guess.
1. A list of selectable letters.
1. A list of words to use for the game.

For today, I just want to understand how drawing in Flutter works, so let's just draw the full
hangman, noose and all.

Thanks to a nice little [Hackermoon tutorial], I learned the basics.

Basically I need a few widgets:

* CustomPaint - gives me the tools I need to draw things.
* CustomPainter - create a subclass of CustomPainter that will draw things.
* CustomPaint child - a child to determine the size of the Canvas.

Here's the simple setup I'm using

```dart
class Game extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return GameState();
  }
}

class GameState extends State<Game> {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return CustomPaint(
      painter: HangmanPainter(),
      // Gets drawn after the Painter.
      child: Center(),
    );
  }
}
```

Now the Hangman painter skeleton code is

```dart
class HangmanPainter extends CustomPainter{

  @override
  void paint(Canvas canvas, Size size) {
    var paint = Paint();
    // Drawing is done here!

  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
      return null;
  }

}
```

With this I have everything I need to draw.

* Paint object - the pen!
* Canvas - the paper!
* Size - paper size!

So I played around with drawing, had to work with some points, angles, and circles.
Might've looked up the Distance formula (don't judge me).

But I got a nice display going!

<img src="{{ site.images }}/hangman-stage-1.png" alt="Hangman Stage 1">

Tomorrow, I'll try adding a list of selectable letters.
and yeah, I probably should brush up on my geometry skills a little bit.

\- Jerry

[recent post]: {{ site.baseurl }}/development/android/flutter/2019/06/19/flutter/
[Hackermoon tutorial]: https://hackernoon.com/drawing-custom-shapes-and-lines-using-canvas-and-path-in-flutter-997dfb8fde5a